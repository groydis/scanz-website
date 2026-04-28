/** Route URL for a SNIP list item (path from queryCollection, with stem fallback for client payload). */
export function snipPostPath(item: { path?: string; stem?: string }): string {
  const p = item.path;
  if (typeof p === "string" && p.startsWith("/")) {
    return p;
  }
  const s = item.stem;
  if (typeof s === "string" && s.length) {
    return s.startsWith("/") ? s : `/${s}`;
  }
  return "/snip";
}
