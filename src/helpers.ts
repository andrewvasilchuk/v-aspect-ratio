export function getPaddingBottom(value: string): string {
  const [x, y] = value.split(':').map(Number)
  return `${(y / x) * 100}%`
}
