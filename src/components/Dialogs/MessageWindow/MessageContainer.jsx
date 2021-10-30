import React from "react";
import MessageWindow from "./MessageWindow";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../../redux/dialogs-reducer";


const MessageContainer = (props) => {

	let state = props.store.getState()

	let sendMessage = () => {
		props.store.dispatch(addMessageActionCreator())
	}

	let onMessageChange = (text) => {
		props.store.dispatch(updateNewMessageTextActionCreator(text))
	}

	return (
		<MessageWindow
			newMessageText={state.dialogsPage.newMessageText}
			messages={state.dialogsPage.messages}

			changeNewMessage={onMessageChange}
			sendNewMessage={sendMessage}/>
	)
}

export default MessageContainer;