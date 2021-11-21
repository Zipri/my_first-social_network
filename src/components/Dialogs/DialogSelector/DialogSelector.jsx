import React from "react";
import {Redirect} from "react-router-dom";

import DialogItem from "./DialogItem/DialogItem";
import s from './DialogSelector.module.css'

const DialogSelector = (props) => {
	if (!props.isAuth) return <Redirect to={"/login"} />
	return (
		<div className={s.dialogs}>
			{props.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)}
		</div>
	)
}

export default DialogSelector;