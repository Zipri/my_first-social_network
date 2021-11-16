import React from "react";
import {connect} from "react-redux";

import MessageWindow from "./MessageWindow";
import {sendMessage, updateMessageBody} from "../../../redux/dialogs-reducer";

let mapStateToProps = (state) => {
	return {
		newMessageText: state.dialogsPage.newMessageText,
		messages: state.dialogsPage.messages
	}
}

const MessageContainer = connect(
	mapStateToProps,
	{sendMessage, updateMessageBody})
(MessageWindow);

export default MessageContainer;