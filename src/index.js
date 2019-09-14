import directive from './v-aspect-ratio'

const plugin = {
  install(Vue) {
    Vue.directive('aspect-ratio', directive)
  },
  directive,
}

export default plugin
