import React from "react";
import {connect} from "react-redux";

import DialogSelector from "./DialogSelector";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";

let mapStateToProps = (state) => {
	return {
		dialogs: state.dialogsPage.dialogs,
	}
};

export default connect(mapStateToProps)(withAuthRedirect(DialogSelector))