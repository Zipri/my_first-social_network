import React from "react";
import {connect} from "react-redux";

import MessageWindow from "./MessageWindow";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../../redux/dialogs-reducer";

let mapStateToProps = (state) => {
	return {
		newMessageText: state.dialogsPage.newMessageText,
		messages: state.dialogsPage.messages
	}
}
let mapDispatchToProps = (dispatch) => {
	return {
		changeNewMessage: (text) => {dispatch(updateNewMessageTextActionCreator(text))},
		sendNewMessage: () => {dispatch(addMessageActionCreator())}
	}
}

const MessageContainer = connect(mapStateToProps, mapDispatchToProps)(MessageWindow);

export default MessageContainer;