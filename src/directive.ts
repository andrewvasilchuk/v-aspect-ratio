import type { DirectiveFunction } from 'vue'

import { getPaddingBottom } from './helpers'

export const directive: DirectiveFunction = function({ style }, { value }) {
  style.paddingBottom = getPaddingBottom(value)
}
