import React, {useEffect} from "react";
import {connect} from "react-redux";
import {compose} from "redux";

import DialogSelector from "./DialogSelector";
import {getDialogs, getFriends} from "../../../redux/getters-selectors";
import {getFriendsThunkCreator} from "../../../redux/users-reducer";
import Preloader from "../../common/Preloader/Preloader";

const DialogContainer = (props) => {
	useEffect(() => {props.getFriendsThunkCreator()}, [])
	if (!props.friends) return <Preloader />
	return <DialogSelector friends={props.friends}/>
}

let mapStateToProps = (state) => {
	return {
		friends: getFriends(state)
	}
};

export default connect(
	mapStateToProps,
	{getFriendsThunkCreator})
(DialogContainer);