import React from "react";
import s from './Dialogs.module.css'
import DialogSelector from "./DialogSelector/DialogSelector";
import MessageWindow from "./MessageWindow/MessageWindow";

const Dialogs = (props) => {
	return (
		<div className={s.dialogsWrapper}>
			<DialogSelector dialogs={props.dialogsPage.dialogs}/>
			<MessageWindow
				newMessageText={props.dialogsPage.newMessageText}
				messages={props.dialogsPage.messages}
				dispatch={props.dispatch}/>
		</div>
	)
}

export default Dialogs;