export function getPaddingBottom(value: string) {
  const [x, y] = value.split(':').map(Number)
  return `${(y / x) * 100}%`
}
