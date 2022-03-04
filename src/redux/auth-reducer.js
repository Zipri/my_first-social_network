import {authApi} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'auth/SET-USER_DATA';

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

export const setAuthUserData = (userId, email, login, isAuth) => ({
    type: SET_USER_DATA,
    data: {userId, email, login, isAuth}
});

export const getAuthMeThunkCreator = () => async (dispatch) => {
    let data = await authApi.getAuthMe()

    if (data.resultCode === 0) {
        let {id, email, login} = data.data
        dispatch(setAuthUserData(id, email, login, true))
    }
};

export const loginThunkCreator =  (email, password, rememberMe) => async (dispatch) => {
    let data = await authApi.loginMe(email, password, rememberMe)

    if (data.resultCode === 0) {
        dispatch(getAuthMeThunkCreator())
    } else {
        let message = data.messages.length > 0 ? data.messages[0] : "Some error"
        dispatch(stopSubmit("login", {_error: message}))
    }
};

export const logoutThunkCreator = () => async (dispatch) => {
    let data = await authApi.logoutMe()

    if (data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
};
