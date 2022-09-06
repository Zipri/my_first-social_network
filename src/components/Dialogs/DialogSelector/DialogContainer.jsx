import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {compose} from "redux";

import DialogSelector from "./DialogSelector";
import {getDialogs, getFriends} from "../../../redux/getters-selectors";
import {getFriendsThunkCreator} from "../../../redux/users-reducer";
import Preloader from "../../common/Preloader/Preloader";

const DialogContainer = (props) => {
	const urlArray = window.location.href.split("/")
	const [url, setUrl] = useState(urlArray[urlArray.length - 1])
	useEffect(() => {props.getFriendsThunkCreator()}, [])
	if (!props.friends) return <Preloader />
	return <DialogSelector friends={props.friends} url={url} setUrl={setUrl}/>
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