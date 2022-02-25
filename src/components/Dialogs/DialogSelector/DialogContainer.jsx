import React from "react";
import {connect} from "react-redux";
import {compose} from "redux";

import DialogSelector from "./DialogSelector";
import {getDialogs} from "../../../redux/getters-selectors";

let mapStateToProps = (state) => {
	return {
		dialogs: getDialogs(state)
	}
};

export default compose(
	connect(mapStateToProps))
(DialogSelector);