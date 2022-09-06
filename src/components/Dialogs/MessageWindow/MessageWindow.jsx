import React from "react";
import {Field, reduxForm} from "redux-form";

import {Element} from "../../common/FormsControls/FormsControls";
import {maxLengthCreator, requiredField} from "../../utils/validators/validators";

import s from './MessageWindow.module.css';

const Message = (props) => {
    return <div className={s.message}>
        <img src='https://tgram.ru/wiki/channels/image/audiobooking.jpg'/>
        <div>
            <text>{props.message}</text>
        </div>
    </div>
}

const Textarea = Element("textarea")
const maxLength100 = maxLengthCreator(100)
const MessageForm = (props) => {
    return <form onSubmit={props.handleSubmit} className={s.sendMess}>
        <Field name={"messageBody"}
               component={Textarea}
               placeholder="Write a message..."
               validate={[requiredField, maxLength100]}
        />
        <button><img src='https://img.icons8.com/ios/452/paper-plane.png' alt={"Message button"}/></button>
    </form>
}
const MessageReduxForm = reduxForm({form: "dialogMessageForm"})(MessageForm)

const MessageWindow = (props) => {
    let sendNewMessage = (values) => props.sendMessage(values.messageBody)
    return <div className={s.messages}>
        <div className={s.messagesBody}>
            {props.messages.map(m => <Message message={m.message} id={m.id}/>)}
        </div>
        <MessageReduxForm onSubmit={sendNewMessage}/>
    </div>
}

export default MessageWindow;