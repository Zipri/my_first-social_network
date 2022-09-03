import {getAuthMeThunkCreator} from "./auth-reducer";

const INITIALIZED_SUCCESS = 'app/INITIALIZED-SUCCESS';
const SET_GLOBAL_ERROR = 'app/SET_GLOBAL_ERROR';
const RESET_GLOBAL_ERROR = 'app/RESET_GLOBAL_ERROR';

let initialState = {
	initialized: false,
	globalError: null
};

const appReducer = (state = initialState, action) => {
	switch (action.type) {

		case INITIALIZED_SUCCESS:
			return {...state, initialized: true}

		case SET_GLOBAL_ERROR:
			return {...state, globalError: action.globalError}

		case RESET_GLOBAL_ERROR:
			return {...state, globalError: null}

		default:
			return state
	}
};

export default appReducer;

export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS});
export const setGlobalError = (globalError) => ({type: SET_GLOBAL_ERROR, globalError});
export const resetGlobalError = () => ({type: RESET_GLOBAL_ERROR});

export const initializeAppThunkCreator = () => (dispatch) => {
	let promise = dispatch(getAuthMeThunkCreator())
	promise.then(() => dispatch(initializedSuccess()))
};

