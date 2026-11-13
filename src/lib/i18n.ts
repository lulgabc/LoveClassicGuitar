import { stripBase } from "./url";

export type Lang = "zh" | "fr";

export const isLang = (value: string | undefined): value is Lang => value === "zh" || value === "fr";

/** Detect the language from the current path. */
export function langFromPath(pathname: string): Lang {
  return stripBase(pathname).startsWith("/fr") ? "fr" : "zh";
}

/** Prefix an app path for a language. Paths are always root-relative, without the Astro base. */
export function pathForLang(lang: Lang, path: string): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  if (lang === "zh") return clean;
  if (clean === "/fr" || clean.startsWith("/fr/")) return clean;
  return clean === "/" ? "/fr/" : `/fr${clean}`;
}

/** Path to the same page in the other language. */
export function otherLanguagePath(pathname: string): string {
  const path = stripBase(pathname);
  if (path === "/404" || path === "/404/" || path === "/404.html") return "/fr/";
  if (path === "/fr/404" || path === "/fr/404/" || path === "/fr/404.html") return "/";
  if (path === "/fr" || path === "/fr/") return "/";
  if (path.startsWith("/fr/")) return path.slice(3) || "/";
  return path === "/" ? "/fr/" : `/fr${path}`;
}

export const localeTag = (lang: Lang): string => (lang === "fr" ? "fr-FR" : "zh-CN");
