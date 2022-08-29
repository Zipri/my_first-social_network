import {authApi, securityApi} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'auth/SET-USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'auth/GET_CAPTCHA_URL_SUCCESS';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaURL: null // if null -> captcha not required
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_USER_DATA:
            return {...state, ...action.data}

        case GET_CAPTCHA_URL_SUCCESS:
            return {...state, captchaURL: action.url}

        default:
            return state
    }
};

export default authReducer;

export const setAuthUserData = (userId, email, login, isAuth) => ({
    type: SET_USER_DATA,
    data: {userId, email, login, isAuth}
});

export const getCaptchaURLSUCCESS = (url) => ({type: GET_CAPTCHA_URL_SUCCESS, url});

export const getAuthMeThunkCreator = () => async (dispatch) => {
    let data = await authApi.getAuthMe()

    if (data.resultCode === 0) {
        let {id, email, login} = data.data
        dispatch(setAuthUserData(id, email, login, true))
    }
};

export const loginThunkCreator =  (email, password, rememberMe, captcha) => async (dispatch) => {
    let data = await authApi.loginMe(email, password, rememberMe, captcha)

    if (data.resultCode === 0) {
        // успешная авторизация
        dispatch(getAuthMeThunkCreator())
    } else {
        let message = data.messages.length > 0 ? data.messages[0] : "Some error"
        dispatch(stopSubmit("login", {_error: message}))
        if (data.resultCode === 10) dispatch(getCaptchaURL())
        //^ несколько раз была произведена авторизация с ошибкой
    }
};

export const logoutThunkCreator = () => async (dispatch) => {
    let data = await authApi.logoutMe()

    if (data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
};

export const getCaptchaURL = () => async (dispatch) => {
    const data = await securityApi.getCaptchaURL()
    dispatch(getCaptchaURLSUCCESS(data.url))
};