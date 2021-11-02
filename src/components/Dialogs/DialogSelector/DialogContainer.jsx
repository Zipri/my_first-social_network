import React from "react";
import {connect} from "react-redux";

import DialogSelector from "./DialogSelector";

let mapStateToProps = (state) => {
	return {
		dialogs: state.dialogsPage.dialogs
	}
};
// let mapDispatchToProps = (dispatch) => {
// 	return {}
// }

const DialogContainer = connect(mapStateToProps)(DialogSelector);

export default DialogContainer;