import Vuex from 'vuex'
import Vue from 'vue'
import application from './modules/application'


Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    application
  }
})