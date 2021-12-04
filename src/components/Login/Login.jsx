import React from 'react';
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

import {minLengthCreator, requiredField} from "../utils/validators/validators";
import {Element} from "../common/FormsControls/FormsControls";
import {loginThunkCreator} from "../../redux/auth-reducer";

import s from './Login.module.css';

const Input = Element("input")
const minLength6 = minLengthCreator(6)
const LoginForm = (props) => {
	return <form onSubmit={props.handleSubmit}>
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
	</form>
}

const LoginReduxForm = reduxForm({form: 'login'}) (LoginForm)

const Login = (props) => {
	let onSubmit = (formData) => props.loginThunkCreator(formData.email, formData.password, formData.rememberMe)
	if (props.isAuth) return <Redirect to={"/profile"} />
	return <div>
		<h1>Please Login</h1>
		<LoginReduxForm onSubmit={onSubmit}/>
	</div>
};

const mapStateToProps = (state) => ({isAuth: state.auth.isAuth})
export default connect(mapStateToProps, {loginThunkCreator})(Login);