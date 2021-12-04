import {authApi} from "../api/api";

const SET_USER_DATA = 'SET-USER_DATA';

let initialState = {
	userId: null,
	email: null,
	login: null,
	isAuth: false
};

const authReducer = (state = initialState, action) => {
	switch (action.type) {

		case SET_USER_DATA:
			return {...state, ...action.data}

		default:
			return state
	}
};

export default authReducer;

export const setAuthUserData = (userId, email, login, isAuth) => ({type: SET_USER_DATA, data: {userId, email, login, isAuth}});

export const getAuthMeThunkCreator = () => (dispatch) => {
	authApi.getAuthMe().then(data => {
		if (data.resultCode === 0) {
			let {id, email, login} = data.data
			dispatch(setAuthUserData(id, email, login, true))
		}
	})
};

export const loginThunkCreator = (email, password, rememberMe) => (dispatch) => {
	authApi.loginMe(email, password, rememberMe).then(data => {
		if (data.resultCode === 0) {
			dispatch(getAuthMeThunkCreator())
		}
	})
};

export const logoutThunkCreator = () => (dispatch) => {
	authApi.logoutMe().then(data => {
		if (data.resultCode === 0) {
			dispatch(setAuthUserData(null, null, null, false))
		}
	})
};
