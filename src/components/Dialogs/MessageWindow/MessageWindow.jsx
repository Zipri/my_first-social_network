import React from "react";
import s from './MessageWindow.module.css'
import Message from "./Message/Message";

const MessageWindow = (props) => {

	let messagesEl = props.messages
		.map(m => <Message message={m.message} id={m.id} />);

	let newMessageEl = React.createRef()

	let sendMess = () => {
		let text = newMessageEl.current.value;
		return (
			alert(text)
		)
	}

	return (
		<div className={s.messages}>
			{messagesEl}
			<div className={s.sendMess}>
				<textarea ref={newMessageEl}/>
				{/*TODO Азъ Есьм Плохо, не стоит такой хуйнёй страдать*/}
				<button onClick={sendMess}>
					<img src='https://img.icons8.com/ios/452/paper-plane.png'/>
				</button>
			</div>
		</div>
	)
}

export default MessageWindow;