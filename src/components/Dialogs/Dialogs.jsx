import React from "react";

import MessageContainer from "./MessageWindow/MessageContainer";
import DialogContainer from "./DialogSelector/DialogContainer";
import s from './Dialogs.module.css'

const Dialogs = (props) => {
	return <div className={s.dialogsWrapper}>
			<DialogContainer />
			<MessageContainer />
		</div>
};

export default Dialogs;