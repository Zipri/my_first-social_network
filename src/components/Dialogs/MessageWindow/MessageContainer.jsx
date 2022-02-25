import React from "react";
import {connect} from "react-redux";

import MessageWindow from "./MessageWindow";
import {sendMessage} from "../../../redux/dialogs-reducer";
import {getMessages} from "../../../redux/getters-selectors";

let mapStateToProps = (state) => {
	return {
		messages: getMessages(state)
	}
}

const MessageContainer = connect(
	mapStateToProps,
	{sendMessage})
(MessageWindow);

export default MessageContainer;