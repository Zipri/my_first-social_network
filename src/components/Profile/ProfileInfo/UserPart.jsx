import s from "./ProfileInfo.module.css";
import React, {useState} from "react";
import {Field, reduxForm} from "redux-form";
import {Element} from "../../common/FormsControls/FormsControls";
import {maxLengthCreator, requiredField} from "../../utils/validators/validators";

const UserPartLabel = (props) => {
    return <div className={s.descriptionArea}>
        <div className={s.text}>{props.text}</div>
        <div>{props.profileInfo}</div>
    </div>
}
const LinksArea = (props) => <div className={s.links}>
    {Object.keys(props.contacts).map(key =>
        props.contacts[key]
            ? <div key={key} className={s.linksArea}>{key}: <a href={props.contacts[key]}
                                                               target="_blank">{props.contacts[key]}</a></div>
            : <div key={key} className={s.linksArea}>{key}: ...</div>
    )}
</div>
const UserInfo = (props) => <div>
    <UserPartLabel text={"Full name:"} profileInfo={props.profile.fullName}/>
    <UserPartLabel text={"About me:"} profileInfo={props.profile.aboutMe}/>
    <UserPartLabel text={"Looking for a job:"}
                   profileInfo={props.profile.lookingForAJob ? "Yes" : "No"}/>
    <UserPartLabel text={"My prof skills:"} profileInfo={props.profile.lookingForAJobDescription}/>
    <LinksArea contacts={props.profile.contacts}/>
</div>

const Input = Element("input")
const Textarea = Element("textarea")
const maxLength20 = maxLengthCreator(20)
const maxLength300 = maxLengthCreator(300)
const EditForm = (props) => <form onSubmit={props.handleSubmit}>
    <button>Save</button>
    {props.error}
    <div>
        <Field name={"fullName"}
               component={Input}
               placeholder="Full name..."
               validate={[requiredField, maxLength20]}/>
    </div>
    <div>
        <Field name={"aboutMe"}
               component={Textarea}
               placeholder="About me..."
               validate={[requiredField, maxLength300]}/>
    </div>
    <div>
        <Field name={"lookingForAJob"}
               component={Input}
               type={"checkbox"}/>
    </div>
    <div>
        <Field name={"lookingForAJobDescription"}
               component={Textarea}
               placeholder="My prof skills..."
               validate={[requiredField, maxLength300]}/>
    </div>
    {Object.keys(props.contacts).map(key =>
        <div key={key}>
            <Field name={"contacts." + key}
                   component={Input}
                   placeholder={key}/>
        </div>
    )}
</form>
const EditFormReduxForm = reduxForm({form: "profileInfoEditForm"})(EditForm)

const UserPart = (props) => {
    let [editMode, setEditMode] = useState(false)
    const saveInfo = (values) => {
        props.saveProfile(values).then(() => setEditMode(false))
    }
    const onMainPhotoSelected = (e) => {
        props.savePhoto(e.target.files[0])
    }

    return <div className={s.userPart}>
        <div className={s.image}>
            {props.isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}
            <img className={s.image}
                 src={props.profile.photos.large || 'https://otvet.imgsmail.ru/download/15f4035d0a54e730e4c24b7a574cb20b_i-33.jpg'}/>
        </div>
        <div className={s.description}>
            {props.isOwner && <button onClick={() => setEditMode(true)}>Edit</button>}
            {editMode
                ? <div>
                    <button onClick={() => setEditMode(false)}>x</button>
                    <EditFormReduxForm initialValues={props.profile}
                                       contacts={props.profile.contacts}
                                       onSubmit={saveInfo}/>
                </div>
                : <UserInfo profile={props.profile}/>}
        </div>
    </div>
}

export default UserPart;