import React from "react";
import s from './../DialogSelector.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
	return (
		<div className={s.dialog}>
			<img src='https://greatchat.ru/wp-content/uploads/2018/07/menyaem-avatar-v-telegramm1.jpg'/>
			<NavLink to={"/dialogs/"+props.id}>{props.name}</NavLink>
		</div>
	)
}

export default DialogItem;