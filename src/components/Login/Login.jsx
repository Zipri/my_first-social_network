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
    console.log(error)
    return <form onSubmit={handleSubmit}>
        <div>
            <Field name={"email"}
                   component={Input}
                   placeholder="email"
                   validate={[requiredField]}/>
        </div>
        <div>
            <Field name={"password"}
                   component={Input}
                   placeholder="password"
                   type={"password"}
                   validate={[requiredField, minLength6]}/>
        </div>
        <div>
            <Field name={"rememberMe"}
                   component={"input"}
                   type={"checkbox"}/> Remember me
        </div>
        <button>Login</button>
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
    return <div>
        <h1>Please Login</h1>
        <LoginReduxForm onSubmit={onSubmit} captchaURL={captchaURL}/>
    </div>
};

const mapStateToProps = (state) => ({
    isAuth: getIsAuth(state),
    captchaURL: getCaptchaURL(state)
})

export default connect(mapStateToProps, {loginThunkCreator})(Login);