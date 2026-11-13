import { playPluck } from "../lib/audio";
import { popElement } from "../lib/celebrate";
import { completedQuestCount } from "../lib/progress";

const root = document.documentElement;

/* ---------- Theme ---------- */
const themeToggle = document.querySelector<HTMLButtonElement>("[data-theme-toggle]");

function applyTheme(theme: "day" | "night"): void {
  root.dataset.theme = theme;
  const meta = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]');
  if (meta) meta.content = theme === "night" ? "#120e2f" : "#fbf7ff";
  if (themeToggle) {
    const dayLabel = themeToggle.dataset.labelDay || "切换到日间模式";
    const nightLabel = themeToggle.dataset.labelNight || "切换到夜晚模式";
    themeToggle.setAttribute("aria-label", theme === "night" ? dayLabel : nightLabel);
    themeToggle.title = theme === "night" ? dayLabel : nightLabel;
  }
}

applyTheme(root.dataset.theme === "night" ? "night" : "day");

themeToggle?.addEventListener("click", () => {
  const next = root.dataset.theme === "night" ? "day" : "night";
  applyTheme(next);
  try {
    localStorage.setItem("lcg-theme", next);
  } catch {
    // Ignore storage restrictions.
  }
});

/* ---------- Mobile navigation ---------- */
const nav = document.querySelector<HTMLElement>("[data-nav]");
const navToggle = document.querySelector<HTMLButtonElement>("[data-nav-toggle]");
const header = document.querySelector<HTMLElement>("[data-header]");

function setNav(open: boolean): void {
  if (!nav || !navToggle) return;
  nav.classList.toggle("is-open", open);
  navToggle.setAttribute("aria-expanded", String(open));
  navToggle.setAttribute(
    "aria-label",
    open ? navToggle.dataset.labelClose || "关闭菜单" : navToggle.dataset.labelOpen || "打开菜单",
  );
}

navToggle?.addEventListener("click", () => {
  setNav(navToggle.getAttribute("aria-expanded") !== "true");
});

nav?.addEventListener("click", (event) => {
  if ((event.target as Element).closest("a")) setNav(false);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && navToggle?.getAttribute("aria-expanded") === "true") {
    setNav(false);
    navToggle.focus();
  }
});

document.addEventListener("click", (event) => {
  if (!header || !nav?.classList.contains("is-open")) return;
  if (!header.contains(event.target as Node)) setNav(false);
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 1040) setNav(false);
});

/* ---------- Header + scroll progress ---------- */
let ticking = false;

function updateScrollUI(): void {
  const scrollTop = window.scrollY || root.scrollTop;
  const max = document.documentElement.scrollHeight - window.innerHeight;
  const percent = max > 0 ? Math.min(100, (scrollTop / max) * 100) : 0;
  const progress = document.querySelector<HTMLElement>("[data-scroll-progress]");
  if (progress) progress.style.width = `${percent}%`;
  header?.classList.toggle("is-scrolled", scrollTop > 8);
  ticking = false;
}

function requestScrollUpdate(): void {
  if (ticking) return;
  ticking = true;
  window.requestAnimationFrame(updateScrollUI);
}

window.addEventListener("scroll", requestScrollUpdate, { passive: true });
updateScrollUI();

/* ---------- Reveal on scroll ---------- */
const revealObserver =
  typeof IntersectionObserver !== "undefined"
    ? new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              revealObserver?.unobserve(entry.target);
            }
          }
        },
        { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
      )
    : null;

function bindReveals(scope: ParentNode = document): void {
  const elements = scope.querySelectorAll<HTMLElement>(".reveal:not([data-reveal-bound])");
  elements.forEach((element) => {
    element.dataset.revealBound = "true";
    if (revealObserver) revealObserver.observe(element);
    else element.classList.add("is-visible");
  });
}

bindReveals();
window.addEventListener("lcg:refresh", () => bindReveals());

/* ---------- Stars in header ---------- */
function updateStarCount(): void {
  const count = completedQuestCount();
  document.querySelectorAll<HTMLElement>("[data-star-count]").forEach((element) => {
    element.textContent = String(count);
  });
}

updateStarCount();
window.addEventListener("lcg:progress-change", updateStarCount);
window.addEventListener("storage", updateStarCount);

/* ---------- Momo's tip bubble ---------- */
document.querySelectorAll<HTMLElement>("[data-tip-bubble]").forEach((bubble) => {
  let tips: string[] = [];
  try {
    const parsed = JSON.parse(bubble.dataset.tips || "[]");
    if (Array.isArray(parsed)) tips = parsed.filter((tip): tip is string => typeof tip === "string");
  } catch {
    tips = [];
  }
  if (!tips.length) return;

  let index = 0;
  const text = bubble.querySelector<HTMLElement>("[data-tip-text]");
  bubble.addEventListener("click", () => {
    index = (index + 1) % tips.length;
    if (text) text.textContent = tips[index] ?? tips[0] ?? "";
    popElement(bubble);
    playToneish();
  });
});

function playToneish(): void {
  playPluck(523.25, 0.045);
}

/* ---------- Generic playable string buttons ---------- */
document.addEventListener("click", (event) => {
  const target = (event.target as Element).closest<HTMLElement>("[data-tone-frequency]");
  if (!target) return;
  const frequency = Number(target.dataset.toneFrequency);
  if (!Number.isFinite(frequency) || frequency <= 0) return;
  playPluck(frequency);
  target.classList.add("tone-playing");
  window.setTimeout(() => target.classList.remove("tone-playing"), 650);
});

/* ---------- Gentle entrance for hero ---------- */
window.setTimeout(() => root.classList.add("page-ready"), 80);
