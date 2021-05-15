import Vue, { VNode } from 'vue'

import { DEFAULT_ASPECT_RATIO } from '../fixtures'

export default Vue.extend({
  name: 'TestComponent',
  props: {
    aspectRatio: {
      type: String,
      default: DEFAULT_ASPECT_RATIO,
    },
  },
  data() {
    return {
      value: this.aspectRatio,
    }
  },
  render(h): VNode {
    return h('div', {
      directives: [{ name: 'aspect-ratio', value: this.value }],
    })
  },
})
