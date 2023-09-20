const currentUser = JSON.parse(localStorage.getItem('currentUser'));

const initialState = {
	currentUser: currentUser || null,
	first: 'first_init',
}
  
export const data = {
	state: initialState,
	actions: {
		setCurrentUser(context, payload) {
			localStorage.setItem('currentUser', JSON.stringify(payload));
			context.commit('SET_CURRENT_USER', payload);
		},
		setFirst(context, payload) {
			context.commit('SET_FIRST', payload);
		},

	},
	mutations: {
		SET_CURRENT_USER(state, payload) {
			state.currentUser = payload;
		},
		SET_FIRST(state, payload) {
			state.first = payload;
		},
		
	}
}
  