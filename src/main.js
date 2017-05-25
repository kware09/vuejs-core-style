import Vue from 'vue'
import App from './App.vue'
import VueMaterial from 'vue-material'

Vue.use(VueMaterial)

Vue.material.registerTheme('default', {
  primary: 'white',
  accent: 'blue-grey',
  warn: 'red',
  background: 'blue-grey'
})

new Vue({
  el: '#app',
  render: h => h(App)
})
