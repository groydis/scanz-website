/** Format ISO date strings from SNIP frontmatter for display (en-AU). */
export function formatSnipPostDate(dateStr: string): string {
  const d = new Date(dateStr);
  if (Number.isNaN(d.getTime())) {
    return dateStr;
  }
  return new Intl.DateTimeFormat("en-AU", { dateStyle: "long" }).format(d);
}
