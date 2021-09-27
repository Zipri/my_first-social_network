import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
	return (
		<div className={s.dialog}>
			<NavLink to={"/dialogs/"+props.id}>{props.name}</NavLink>
		</div>
	)
}

const Message = (props) => {
	return (
		<div className={s.message}>{props.message}</div>
	)
}

const Dialogs = () => {

	let dialogsData = [
		{id: 1, name: 'Антон'},
		{id: 2, name: 'Ангелина'},
		{id: 3, name: 'Кот'},
		{id: 4, name: 'Кирилл'},
		{id: 5, name: 'Яша'},
		{id: 6, name: 'Ъуъ'},
	]

	let messagesData = [
		{id: 1, message: 'first message'},
		{id: 2, message: 'Второе сообщение'},
		{id: 3, message: 'Powel nahoi'},
		{id: 4, message: 'प्रतीक मार्गनिराकरण करू शकत नाही'},
		{id: 5, message: 'مرحبا العالم'},
		{id: 6, message: 'Ъуъ'},
	]

	let dialogsEl = dialogsData
		.map(d => <DialogItem name={d.name} id={d.id} />);

	let messagesEl = messagesData
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