const user = JSON.parse(localStorage.getItem('user'));

const initialState = user ? {user: user} : {user: null};
  
export const auth = {
	namespace: true,
	state: initialState,
	actions: {
		setUser(context, payload) {
			localStorage.setItem('user', JSON.stringify(payload));
			context.commit('SET_USER', payload);
		},

	},
	mutations: {
		SET_USER(state, payload) {
			state.user = payload;
		},
		
	}
}