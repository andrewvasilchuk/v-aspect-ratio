import { applyDirective } from './helpers'

export default function aspectRatio(vnode, directiveMeta) {
  const style = vnode.data.style || (vnode.data.style = {})

  applyDirective(directiveMeta.value, style)
}
