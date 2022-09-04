import s from "./ProfileInfo.module.css";
import React, {useState} from "react";
import {Field, reduxForm} from "redux-form";
import {Element} from "../../common/FormsControls/FormsControls";
import {maxLengthCreator, requiredField} from "../../utils/validators/validators";
import {Button} from "antd";
import FollowControl from "../../common/FollowControl/FollowControl";
import {useHistory} from "react-router-dom";
import copy from "copy-to-clipboard";

const Buttons = (props) => {
    const history = useHistory();
    const url = window.location.href
    return <div className={s.buttons}>
        <div>
            <FollowControl userId={props.userId}
                           profile={true}
                           userFollowed={props.followed}
                           followingInProgress={props.followingInProgress}
                           followingUser={props.followingUser}
                           unfollowingUser={props.unfollowingUser}/>
        </div>
        <div>
            <Button onClick={() => copy(url)}
                    style={{
                        borderRadius: 10,
                        marginTop: 20,
                        height: 40,
                        width: 186
                    }}>Copy this profile link</Button>
        </div>
        <div>
            <Button onClick={() => history.push("/users")}
                    style={{
                        borderRadius: 10,
                        marginTop: 20,
                        height: 40,
                        width: 186
                    }}>Back to users page</Button>
        </div>
    </div>
}


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
    <button style={{
        borderRadius: 10,
        marginBottom: 20,
        height: 40,
        width: 186
    }}
            className={s.inputFileSpan}>Save new information
    </button>
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
    <div className={s.flex}>
        <Field name={"lookingForAJob"}
               component={Input}
               type={"checkbox"}/>
        <div>Are you looking for a job</div>
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
    const saveInfo = (values) =>
        props.saveProfile(values).then(() => setEditMode(false))
    const onMainPhotoSelected = (e) => props.savePhoto(e.target.files[0])
    return <div className={s.userPart}>

        <div className={s.imageBody}>
            <img className={s.image} src={props.profile.photos.large} alt={"Profile photo"}/>
            {props.isOwner ?
                <div className={s.imageButtons}>
                    <div className={s.inputFileBody}>
                        <label>
                            <input type={"file"} onChange={onMainPhotoSelected} className={s.inputFile}/>
                            <span className={s.inputFileSpan}>
                             Click to upload new avatar
                        </span>
                        </label>
                    </div>
                    <Button onClick={() => setEditMode(true)}
                            style={{
                                borderRadius: 10,
                                marginTop: 20,
                                height: 40,
                                width: 186
                            }}>Edit your profile info</Button>
                </div>
                : <Buttons followingUser={props.followingUser}
                           unfollowingUser={props.unfollowingUser}
                           followed={props.followed}
                           userId={props.profile.userId}
                           followingInProgress={props.followingInProgress}/>}
        </div>

        <div>
            {editMode
                ? <div className={s.editMode}>
                    <Button onClick={() => setEditMode(false)}
                            danger
                            style={{
                                borderRadius: 10,
                                marginBottom: 20,
                                height: 40,
                                width: 186
                            }}>Close without save</Button>
                    <EditFormReduxForm initialValues={props.profile}
                                       contacts={props.profile.contacts}
                                       onSubmit={saveInfo}/>
                </div>
                : <UserInfo profile={props.profile}/>}
        </div>
    </div>
}

export default UserPart;