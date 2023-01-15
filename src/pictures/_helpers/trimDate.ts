export function trimDate(date: Date): string {
  return date.toISOString().substring(0, 10);
}
