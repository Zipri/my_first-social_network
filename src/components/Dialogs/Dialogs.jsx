import React from "react";
import s from './Dialogs.module.css'
import DialogSelector from "./DialogSelector/DialogSelector";
import MessageWindow from "./MessageWindow/MessageWindow";

const Dialogs = (props) => {
	return (
		<div className={s.dialogsWrapper}>
			<DialogSelector dialogs={props.dialogs}/>
			<MessageWindow messages={props.messages}/>
		</div>
	)
}

export default Dialogs;