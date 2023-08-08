const initialState = {
	user: {name: 'user_init'},
}
  
export const auth = {
	namespace: true,
	state: initialState,
	mutations: {
		SET_USER(state, payload) {
			state.user = payload;
		},
		
	},
	actions: {
		setUser(context, payload) {
			context.commit('SET_USER', payload);
		},

	}
}