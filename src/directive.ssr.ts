/* eslint-disable no-param-reassign */
import type { VNode, VNodeDirective } from 'vue'

import { getPaddingBottom } from './helpers'

export function directive(node: VNode, dir: VNodeDirective): void {
  const paddingBottom = getPaddingBottom(dir.value)

  /* istanbul ignore next */
  if (node.data === undefined) {
    node.data = { style: { paddingBottom } }
  } else if (node.data.style === undefined) {
    node.data.style = { paddingBottom }
  } else if (Array.isArray(node.data.style)) {
    node.data.style.push({ paddingBottom })
  } else if (typeof node.data.style === 'string') {
    /* istanbul ignore next */
    node.data.style += `padding-bottom: ${paddingBottom};`
  } else {
    // @ts-expect-error `style` type is `object`
    node.data.style.paddingBottom = paddingBottom
  }
}
