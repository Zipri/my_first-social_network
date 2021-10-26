import React from "react";
import s from './MessageWindow.module.css'
import Message from "./Message/Message";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../../redux/state";

const MessageWindow = (props) => {

	let messagesEl = props.messages
		.map(m => <Message
			message={m.message}
			id={m.id} />);

	let newMessageEl = React.createRef()

	let sendMessage = () => {
		props.dispatch(addMessageActionCreator())
	}
	let onMessageChange = () => {
		let text = newMessageEl.current.value
		props.dispatch(updateNewMessageTextActionCreator(text))
	}

	return (
		<div className={s.messages}>
			{messagesEl}
			<div className={s.sendMess}>
				<textarea
					placeholder="Write a message..."
					ref={newMessageEl}
					value={props.newMessageText}
					onChange={onMessageChange}/>
				<button onClick={sendMessage}>
					<img src='https://img.icons8.com/ios/452/paper-plane.png'/>
				</button>
			</div>
		</div>
	)
}

export default MessageWindow;