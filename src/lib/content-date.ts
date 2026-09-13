/** Editorial dates have no time of day; use UTC so every build emits the same date. */
export function contentDateIso(value: string): string {
  return new Date(`${value} UTC`).toISOString();
}
