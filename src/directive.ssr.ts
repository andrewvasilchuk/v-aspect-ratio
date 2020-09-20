import type { VNode, VNodeDirective } from 'vue'

import { getPaddingBottom } from './helpers'

export function directive(node: VNode, dir: VNodeDirective) {
  const paddingBottom = getPaddingBottom(dir.value)

  if (node.data === undefined) {
    node.data = { style: { paddingBottom }}
  } else if (node.data.style === undefined ) {
    node.data.style = { paddingBottom }
  } else if (Array.isArray(node.data.style)) {
    node.data.style.push({ paddingBottom })
  } else if (typeof node.data.style === 'string') {
    node.data.style += `padding-bottom: ${paddingBottom};`
  } else {
    // @ts-ignore
    node.data.style.paddingBottom = paddingBottom
  }
}

