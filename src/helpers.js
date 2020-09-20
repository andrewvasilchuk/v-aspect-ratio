export function applyDirective(value, style) {
  const [x, y] = value.split(':').map(Number)
  style.paddingBottom = `${(y / x) * 100}%`
}
