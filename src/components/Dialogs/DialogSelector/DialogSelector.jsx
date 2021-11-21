import React from "react";

import DialogItem from "./DialogItem/DialogItem";
import s from './DialogSelector.module.css'

const DialogSelector = (props) => {
	return (
		<div className={s.dialogs}>
			{props.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)}
		</div>
	)
}

export default DialogSelector;