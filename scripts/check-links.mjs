import fs from "node:fs";
import path from "node:path";

const DIST = path.resolve("dist");
const BASE_PATH = "/LoveClassicGuitar/";
const HTML_EXT = ".html";

if (!fs.existsSync(DIST)) {
  console.error("dist/ not found. Run `npm run build` first or use `npm run check:links`.");
  process.exit(1);
}

function walk(dir) {
  const output = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) output.push(...walk(full));
    else if (entry.name.endsWith(HTML_EXT)) output.push(full);
  }
  return output;
}

const htmlFiles = walk(DIST);
const external = new Map();
const internal = new Map();
const youtubeVideos = new Map();

for (const file of htmlFiles) {
  const html = fs.readFileSync(file, "utf8");
  const page = path.relative(DIST, file).replace(/index\.html$/, "").replace(/\/$/, "") || "/";
  for (const match of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
    const raw = match[1].replaceAll("&amp;", "&").replaceAll("&#x27;", "'");
    if (raw.startsWith("http://") || raw.startsWith("https://")) {
      const url = raw.replace(/#.*$/, "");
      if (url.startsWith("https://lulgabc.github.io/LoveClassicGuitar")) continue;
      // YouTube search URLs and score-library search URLs are stable entry points,
      // not individual videos or files to validate.
      if (url.includes("youtube.com/results?search_query=")) continue;
      if (url.includes("imslp.org/wiki/Special:Search?search=")) continue;
      if (url.includes("search.worldcat.org/search?q=")) continue;
      if (!external.has(url)) external.set(url, new Set());
      external.get(url).add(page);
      const yt = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube-nocookie\.com\/embed\/)([A-Za-z0-9_-]{6,})/);
      if (yt) {
        if (!youtubeVideos.has(yt[1])) youtubeVideos.set(yt[1], new Set());
        youtubeVideos.get(yt[1]).add(page);
      }
    } else if (raw.startsWith(BASE_PATH)) {
      const clean = raw.slice(BASE_PATH.length).split("#")[0].split("?")[0];
      const candidates = [
        path.join(DIST, clean),
        path.join(DIST, clean, "index.html"),
      ];
      const found = candidates.some((candidate) => fs.existsSync(candidate) && fs.statSync(candidate).isFile());
      if (!internal.has(raw)) internal.set(raw, { found, pages: new Set() });
      internal.get(raw).pages.add(page);
    }
  }
}

const timeout = 15000;
const KNOWN_PROTECTED_HOSTS = new Set(["www.abrsm.org", "abrsm.org", "www.guitarsalon.com", "www.stringsbymail.com"]);
const userAgent =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124 Safari/537.36 LoveClassicGuitarLinkCheck/1.0";

async function checkYouTube(id) {
  const endpoint = `https://www.youtube.com/oembed?url=${encodeURIComponent(`https://www.youtube.com/watch?v=${id}`)}&format=json`;
  try {
    const response = await fetch(endpoint, { signal: AbortSignal.timeout(timeout), headers: { "user-agent": userAgent } });
    if (!response.ok) return { status: response.status, ok: false, note: "oEmbed failed" };
    const data = await response.json();
    return { status: 200, ok: true, note: data.title?.slice(0, 90) ?? "" };
  } catch (error) {
    return { status: 0, ok: false, note: String(error).slice(0, 100) };
  }
}

async function checkUrl(url) {
  try {
    let response = await fetch(url, {
      method: "GET",
      redirect: "follow",
      signal: AbortSignal.timeout(timeout),
      headers: { "user-agent": userAgent, accept: "text/html,application/xhtml+xml" },
    });
    if (response.status === 405) {
      response = await fetch(url, {
        method: "HEAD",
        redirect: "follow",
        signal: AbortSignal.timeout(timeout),
        headers: { "user-agent": userAgent },
      });
    }
    return { status: response.status, finalUrl: response.url, ok: response.status < 400 };
  } catch (error) {
    return { status: 0, finalUrl: url, ok: false, note: String(error).slice(0, 100) };
  }
}

async function pool(items, limit, worker) {
  const results = [];
  let cursor = 0;
  const runners = Array.from({ length: Math.min(limit, items.length) }, async () => {
    while (cursor < items.length) {
      const index = cursor++;
      results[index] = await worker(items[index], index);
    }
  });
  await Promise.all(runners);
  return results;
}

console.log(`Checking ${htmlFiles.length} HTML pages…`);
const brokenInternal = [...internal.entries()].filter(([, info]) => !info.found);
if (brokenInternal.length) {
  console.log("\nBroken internal links:");
  for (const [url, info] of brokenInternal) console.log(" ✗", url, "on", [...info.pages].join(", "));
} else {
  console.log(`✓ ${internal.size} internal links resolved.`);
}

const ytEntries = [...youtubeVideos.entries()];
console.log(`\nChecking ${ytEntries.length} YouTube videos…`);
const ytResults = await pool(ytEntries, 4, async ([id]) => {
  const result = await checkYouTube(id);
  return { id, ...result };
});
for (const result of ytResults) {
  if (!result.ok) console.log(` ✗ ${result.id} [${result.status}] ${result.note}`);
}
console.log(`✓ ${ytResults.filter((result) => result.ok).length}/${ytResults.length} YouTube videos responded.`);

const externalEntries = [...external.entries()];
console.log(`\nChecking ${externalEntries.length} external URLs…`);
const externalResults = await pool(externalEntries, 6, async ([url]) => {
  if (url.includes("youtube.com/watch") || url.includes("youtu.be/") || url.includes("youtube-nocookie.com/embed/")) {
    return { url, status: 200, ok: true, note: "checked via oEmbed" };
  }
  const result = await checkUrl(url);
  return { url, ...result };
});

const hardFailures = [];
const blocked = [];
for (const result of externalResults) {
  let host = "";
  try {
    host = new URL(result.url).hostname;
  } catch {
    host = "";
  }
  if ([401, 403, 405, 412, 429].includes(result.status) || (!result.ok && KNOWN_PROTECTED_HOSTS.has(host))) {
    blocked.push(result);
  } else if (!result.ok) {
    hardFailures.push(result);
  }
}
if (hardFailures.length) {
  console.log("\nHard failures:");
  for (const result of hardFailures) console.log(` ✗ [${result.status}] ${result.url} ${result.note ?? ""}`);
} else {
  console.log(`✓ All external URLs responded or are protected by bot checks.`);
}
if (blocked.length) {
  console.log(`\nBlocked to automated checks (verify manually if needed): ${blocked.length}`);
  for (const result of blocked.slice(0, 12)) console.log(`  - [${result.status}] ${result.url}`);
}

const failed = brokenInternal.length > 0 || hardFailures.length > 0 || ytResults.some((result) => !result.ok);
if (failed) process.exitCode = 1;
