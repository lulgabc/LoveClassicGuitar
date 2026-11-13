/**
 * Copy Astro's scoped-style marker attributes from a server-rendered element
 * to an element created at runtime, including its descendants.
 */
export function copyScope(source: Element, target: Element): void {
  let scopeOwner: Element | null = source;
  let attrs = Array.from(scopeOwner.attributes).filter((attribute) => attribute.name.startsWith("data-astro-cid"));

  if (!attrs.length) {
    const nested = source.querySelector<Element>("[data-astro-cid]");
    if (nested) {
      scopeOwner = nested;
      attrs = Array.from(nested.attributes).filter((attribute) => attribute.name.startsWith("data-astro-cid"));
    }
  }

  if (!attrs.length) return;

  const apply = (element: Element): void => {
    for (const attribute of attrs) element.setAttribute(attribute.name, attribute.value);
    element.querySelectorAll("*").forEach((child) => {
      for (const attribute of attrs) child.setAttribute(attribute.name, attribute.value);
    });
  };

  apply(target);
}
