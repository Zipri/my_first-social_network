import React from 'react';
import {Field, reduxForm} from "redux-form";

import {minLengthCreator, requiredField} from "../utils/validators/validators";
import {Element} from "../common/FormsControls/FormsControls";

import s from './Login.module.css';

const Input = Element("input")
const minLength6 = minLengthCreator(6)
const LoginForm = (props) => {
	return <form onSubmit={props.handleSubmit}>
		<div>
			<Field name={"login"}
						 component={Input}
						 placeholder="login"
						 validate={[requiredField]}/>
		</div>
		<div>
			<Field name={"password"}
						 component={Input}
						 placeholder="password"
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
	let onSubmit = (formData) => {}
	return <div>
		<h1>Please Login</h1>
		<LoginReduxForm onSubmit={onSubmit}/>
		{/*<h3>https://social-network.samuraijs.com/</h3>*/}
	</div>
};

export default Login;