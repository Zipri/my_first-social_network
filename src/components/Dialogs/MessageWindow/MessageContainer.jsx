import React from "react";
import {connect} from "react-redux";

import MessageWindow from "./MessageWindow";
import {sendMessage} from "../../../redux/dialogs-reducer";

let mapStateToProps = (state) => {
	return {
		messages: state.dialogsPage.messages
	}
}

const MessageContainer = connect(
	mapStateToProps,
	{sendMessage})
(MessageWindow);

export default MessageContainer;