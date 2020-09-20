import type { VNode } from 'vue'
import Vue from 'vue'
import randomColor from 'randomcolor'

export default Vue.extend({
  name: 'App',
  data() {
    return {
      aspectRatios: ['16:9', '4:3', '1:1'],
    }
  },
  render(h): VNode {
    return h('section', undefined, [
      h('h1', undefined, [h('code', undefined, 'v-aspect-ratio')]),
      this.aspectRatios.map((value) =>
        h(
          'div',
          {
            directives: [{ name: 'aspect-ratio', value }],
            style: { backgroundColor: randomColor() },
          },
          value
        )
      ),
    ])
  },
})
