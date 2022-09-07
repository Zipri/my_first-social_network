import React from 'react';
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

import {minLengthCreator, requiredField} from "../utils/validators/validators";
import {Element} from "../common/FormsControls/FormsControls";
import {loginThunkCreator} from "../../redux/auth-reducer";
import {getCaptchaURL, getIsAuth} from "../../redux/getters-selectors";

import s from './Login.module.css';

const Input = Element("input")
const minLength6 = minLengthCreator(6)
const LoginForm = ({handleSubmit, error, captchaURL}) => {
    return <form onSubmit={handleSubmit}>
        <div className={s.inputForm}>
            <Field name={"email"}
                   component={Input}
                   placeholder="email"
                   validate={[requiredField]}/>
        </div>
        <div className={s.inputForm}>
            <Field name={"password"}
                   component={Input}
                   placeholder="password"
                   type={"password"}
                   validate={[requiredField, minLength6]}/>
        </div>
        <div className={s.inputForm}>
            <Field name={"rememberMe"}
                   component={"input"}
                   type={"checkbox"}/> Remember me
        </div>
        <button className={s.inputForm}>Login</button>
        {error}
        {captchaURL && <div>
            <img src={captchaURL}/>
            <Field name={"captcha"}
                   component={Input}
                   placeholder="Captcha symbols"
                   validate={[requiredField]}/>
        </div>}
    </form>
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = ({isAuth, captchaURL, loginThunkCreator}) => {
    const onSubmit = (formData) => loginThunkCreator(
        formData.email,
        formData.password,
        formData.rememberMe,
        formData.captcha
    )
    if (isAuth) return <Redirect to={"/profile"}/>
    return <div className={s.loginForm}>
        <div>
            <h1>Please Login</h1>
            <LoginReduxForm onSubmit={onSubmit} captchaURL={captchaURL}/>
            <h1><a href={"https://social-network.samuraijs.com/signUp"} target={"_blank"}>Registration</a></h1>
        </div>
    </div>
};

const mapStateToProps = (state) => ({
    isAuth: getIsAuth(state),
    captchaURL: getCaptchaURL(state)
})

export default connect(mapStateToProps, {loginThunkCreator})(Login);