import { createStore } from 'vuex'



export default createStore({
  state: {
    first: 'first_default',
    alerts: []
  },
  getters: {
  },
  mutations: {
    SET_FIRST(state, payload) {
      state.first = payload;
    },
    ADD_ALERT(state, payload) {
      state.alerts.push(payload);
    },
  },
  actions: {
    setFirst(context, payload) {
      context.commit('SET_FIRST', payload);
    },
    addAlert(context, payload) {
      context.commit('ADD_ALERT', payload);
    },

  },
  modules: {
  }
})
