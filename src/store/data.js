const initialState = {
	first: 'first_init',
}
  
export const data = {
	state: initialState,
	mutations: {
		SET_FIRST(state, payload) {
			state.first = payload;
		},
		
	},
	actions: {
		setFirst(context, payload) {
			context.commit('SET_FIRST', payload);
		},

	}
}
  