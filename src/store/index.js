import { createStore } from 'vuex'

export default createStore({
  state: {
    sn: ''
  },
  getters: {
  },
  mutations: {
    setN(state, payload) {
      state.sn = payload;
    }
  },
  actions: {
    setN(context, payload) {
      context.commit('setN', payload);
    }

  },
  modules: {
  }
})
