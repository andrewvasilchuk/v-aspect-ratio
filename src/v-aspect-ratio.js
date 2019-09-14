import { applyDirective } from './helpers'

export default function(el, binding) {
  applyDirective(binding.value, el.style)
}
