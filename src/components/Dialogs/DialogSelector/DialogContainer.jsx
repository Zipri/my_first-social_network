import React from "react";
import DialogSelector from "./DialogSelector";

const DialogContainer = (props) => {

	let state = props.store.getState()

	return (
		<DialogSelector
			dialogs={state.dialogsPage.dialogs}/>
	)
}

export default DialogContainer;