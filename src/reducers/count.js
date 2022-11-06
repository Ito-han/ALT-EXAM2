export const INITIAL_STATE = {
	count: 0
};

// export const action = {}

export const counterReducer = (state, action) => {
	switch (action.type) {
		case "INCREMENT":
			return {
				...state,
				count: state.count++
			};
		case "DECREMENT":
			return {
				...state,
				count: state.count ? state.count-- : state.count
			};
		case "SET_VALUE":
			return {
				...state,
				count: action.value < 0 ? 0 : action.value
			};
		case "RESET":
			return {
				...state,
				count: 0
			};
		default:
			return state;
	}
};
