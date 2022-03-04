import {getAuthMeThunkCreator} from "./auth-reducer";

const INITIALIZED_SUCCESS = 'app/INITIALIZED-SUCCESS';

let initialState = {
	initialized: false
};

const appReducer = (state = initialState, action) => {
	switch (action.type) {

		case INITIALIZED_SUCCESS:
			return {...state, initialized: true}

		default:
			return state
	}
};

export default appReducer;

export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS});

export const initializeAppThunkCreator = () => (dispatch) => {
	let promise = dispatch(getAuthMeThunkCreator())
	promise.then(() => dispatch(initializedSuccess()))
};


