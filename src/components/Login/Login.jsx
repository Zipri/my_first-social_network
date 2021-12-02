import React from 'react';
import {Field, reduxForm} from "redux-form";
import s from './Login.module.css'

const LoginForm = (props) => {
	return <form onSubmit={props.handleSubmit}>
		<div>
			<Field name={"login"} component={"input"} placeholder="login"/>
		</div>
		<div>
			<Field name={"password"} component={"input"} placeholder="password"/>
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