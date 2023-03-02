import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currencyConversion: 0
  },
  mutations: {
    SET_CURRENCY (state , amount) {
      state.currencyConversion = amount
    }
  },
  actions: {}
})
