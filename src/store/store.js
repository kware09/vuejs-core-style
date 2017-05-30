import Vue from 'vue'
import Vuex from 'vuex'

import dashboardConfig from './modules/dashboardConfig'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    dashboardConfig
  }
})
