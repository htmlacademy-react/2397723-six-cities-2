export function ratingToPercent(rating: number): string {
  return `${rating / 5 * 100}%`;
}
