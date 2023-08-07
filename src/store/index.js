import { createStore } from 'vuex'

export default createStore({
  state: {
    first: 'first_default'
  },
  getters: {
  },
  mutations: {
    SET_FIRST(state, payload) {
      state.first = payload;
    }
  },
  actions: {
    setFirst(context, payload) {
      context.commit('SET_FIRST', payload);
    }

  },
  modules: {
  }
})
