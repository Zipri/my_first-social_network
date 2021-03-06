import React from 'react';
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

import {minLengthCreator, requiredField} from "../utils/validators/validators";
import {Element} from "../common/FormsControls/FormsControls";
import {loginThunkCreator} from "../../redux/auth-reducer";
import {getIsAuth} from "../../redux/getters-selectors";

import s from './Login.module.css';

const Input = Element("input")
const minLength6 = minLengthCreator(6)
const LoginForm = ({handleSubmit, error}) => {
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
            <Field name={"rememberMe"} component={"input"} type={"checkbox"}/> Remember me
        </div>
        <button>Login</button>
        {error}
    </form>
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = ({isAuth, loginThunkCreator}) => {
    const onSubmit = (formData) => loginThunkCreator(formData.email, formData.password, formData.rememberMe)
    if (isAuth) return <Redirect to={"/profile"}/>
    return <div>
        <h1>Please Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
};

const mapStateToProps = (state) => (getIsAuth(state))

export default connect(mapStateToProps, {loginThunkCreator})(Login);