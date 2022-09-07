import React, {useEffect, useState} from "react";
import s from './Dialogs.module.css'
import Preloader from "../common/Preloader/Preloader";
import DialogSelector from "./DialogSelector/DialogSelector";
import {getFriends, getIsAuth, getMessages} from "../../redux/getters-selectors";
import {connect} from "react-redux";
import {getFriendsThunkCreator} from "../../redux/users-reducer";
import MessageWindow from "./MessageWindow/MessageWindow";
import {sendMessage} from "../../redux/dialogs-reducer";
import {useHistory, useParams} from "react-router-dom";

const Dialogs = (props) => <div className={s.dialogsWrapper}>
    <DialogSelector friends={props.friends}
                    url={props.url}
                    setUrl={props.setUrl}/>
    <MessageWindow messages={props.messages}
                   sendMessage={props.sendMessage}/>
</div>

const DialogContainer = (props) => {
    const urlArray = window.location.href.split("/")
	const history = useHistory();
    const [url, setUrl] = useState(urlArray[urlArray.length - 1])
    useEffect(() => {
        props.getFriendsThunkCreator()
    }, [])
	if (!props.isAuth) history.push("/login")
    if (!props.friends) return <Preloader/>
    return <Dialogs friends={props.friends}
                    messages={props.messages}
                    sendMessage={props.sendMessage}
                    url={url}
                    setUrl={setUrl}/>
}

let mapStateToProps = (state) => {
    return {
        friends: getFriends(state),
        messages: getMessages(state),
		isAuth: getIsAuth(state),
    }
};

export default connect(
    mapStateToProps,
    {getFriendsThunkCreator, sendMessage})
(DialogContainer);