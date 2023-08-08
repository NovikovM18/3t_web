import { createStore } from 'vuex'
import { auth } from './auth'
import { data } from './data'

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    auth,
    data
  }
})
