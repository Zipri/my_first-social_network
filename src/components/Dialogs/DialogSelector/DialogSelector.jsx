import React from "react";
import s from './DialogSelector.module.css'
import DialogItem from "./DialogItem/DialogItem";

const DialogSelector = (props) => {

	let dialogsEl = props.dialogs
		.map(d => <DialogItem name={d.name} id={d.id}/>);

	return (
		<div className={s.dialogs}>
			{dialogsEl}
		</div>
	)
}

export default DialogSelector;