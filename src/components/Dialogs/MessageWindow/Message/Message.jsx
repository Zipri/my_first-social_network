import React from "react";
import s from './../MessageWindow.module.css'

const Message = (props) => {
	return (
		<div className={s.message}>
			<img src='https://tgram.ru/wiki/channels/image/audiobooking.jpg'/>
			<div><text>{props.message}</text></div>
		</div>
	)
}

export default Message;