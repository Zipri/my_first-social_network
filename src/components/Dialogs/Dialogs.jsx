import React from "react";
import s from './Dialogs.module.css'

const Dialogs = () => {
	return (
		<div className={s.dialogs}>

			<div className={s.dialogsItems}>
				<div className={s.dialog}>
					Собака
				</div>
				<div className={s.dialog}>
					Валера
				</div>
				<div className={s.dialog}>
					Кот
				</div>
				<div className={s.dialog}>
					Черьв
				</div>
				<div className={s.dialog}>
					Кто-то
				</div>
				<div className={s.dialog}>
					Шнур
				</div>
			</div>

			<div className={s.messages}>
				<div className={s.message}>Первое сообщение</div>
				<div className={s.message}>Второе сообщение</div>
				<div className={s.message}>Powel nahoi</div>
				<div className={s.message}>प्रतीक 'मार्ग'निराकरण करू शकत नाही</div>
			</div>

		</div>
	)
}

export default Dialogs;