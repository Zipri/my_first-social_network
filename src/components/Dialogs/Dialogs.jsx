import React from "react";
import s from './Dialogs.module.css'
import MessageContainer from "./MessageWindow/MessageContainer";
import DialogContainer from "./DialogSelector/DialogContainer";

const Dialogs = (props) => {
	return (
		<div className={s.dialogsWrapper}>
			<DialogContainer />
			<MessageContainer />
		</div>
	)
}

export default Dialogs;