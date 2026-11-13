const COLORS = ["#ff97d1", "#8b72ff", "#5dcafa", "#ffd86f", "#64dfb4", "#ff8b7b"];

export function celebrate(count = 34): void {
  if (typeof document === "undefined") return;
  if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const layer = document.createElement("div");
  layer.className = "confetti-layer";
  layer.setAttribute("aria-hidden", "true");
  document.body.appendChild(layer);

  for (let index = 0; index < count; index += 1) {
    const piece = document.createElement("span");
    piece.className = "confetti-piece";
    piece.style.setProperty("--x", `${48 + (Math.random() - 0.5) * 38}%`);
    piece.style.setProperty("--dx", `${(Math.random() - 0.5) * 300}px`);
    piece.style.setProperty("--dy", `${-80 - Math.random() * 220}px`);
    piece.style.setProperty("--rot", `${Math.random() * 540 - 270}deg`);
    piece.style.setProperty("--delay", `${Math.random() * 160}ms`);
    piece.style.setProperty("--size", `${5 + Math.random() * 8}px`);
    piece.style.setProperty("--color", COLORS[index % COLORS.length] ?? "#ffd86f");
    layer.appendChild(piece);
  }

  window.setTimeout(() => layer.remove(), 1900);
}

export function popElement(element: Element | null): void {
  if (!element) return;
  element.classList.remove("pop");
  void (element as HTMLElement).offsetWidth;
  element.classList.add("pop");
  window.setTimeout(() => element.classList.remove("pop"), 500);
}
