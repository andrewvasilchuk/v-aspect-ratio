import Vue from 'vue'
import App from './App'
import Plugin from '../src'

Vue.config.productionTip = false

Vue.use(Plugin)

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  render: (h) => h(App),
})
