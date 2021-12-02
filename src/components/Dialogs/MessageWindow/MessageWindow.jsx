import React from "react";
import {Field, reduxForm} from "redux-form";

import Message from "./Message/Message";
import s from './MessageWindow.module.css';


const MessageForm = (props) => {
	return <form onSubmit={props.handleSubmit} className={s.sendMess}>
		<Field name={"messageBody"}
					 component={"textarea"}
					 placeholder="Write a message..."
		/>
		<button><img src='https://img.icons8.com/ios/452/paper-plane.png'/></button>
	</form>
}
const MessageReduxForm = reduxForm({form: "dialogMessageForm"})(MessageForm)

const MessageWindow = (props) => {
	let sendNewMessage = (values) => props.sendMessage(values.messageBody)
	return (
		<div className={s.messages}>
			{props.messages.map(m => <Message message={m.message} id={m.id}/>)}
			<MessageReduxForm onSubmit={sendNewMessage}/>
		</div>
	)
}

export default MessageWindow;