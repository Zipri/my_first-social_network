import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

	let dialogsEl = props.dialogsData
		.map(d => <DialogItem name={d.name} id={d.id} />);
	let messagesEl = props.messagesData
		.map(m => <Message message={m.message} id={m.id} />)

	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItems}>
				{dialogsEl}
			</div>
			<div className={s.messages}>
				{messagesEl}
			</div>
		</div>
	)
}

export default Dialogs;