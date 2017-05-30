import Vue from 'vue'
import App from './App.vue'
import VueMaterial from 'vue-material'
import VueRouter from 'vue-router'
import store from './store/store'

Vue.use(VueRouter)
Vue.use(VueMaterial)

Vue.material.registerTheme('default', {
  primary: 'white',
  accent: 'yellow',
  warn: 'red',
  background: 'white'
})

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
