import type { DirectiveFunction } from 'vue'

import { getPaddingBottom } from './helpers'

export const directive: DirectiveFunction = function directive(
  { style },
  { value }
) {
  // eslint-disable-next-line no-param-reassign
  style.paddingBottom = getPaddingBottom(value)
}
