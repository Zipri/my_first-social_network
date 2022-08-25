import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import UserStatus from "./ProfileStatus";
import s from "./ProfileInfo.module.css";
import {NavLink} from "react-router-dom";
import FollowControl from "../../common/FollowControl/FollowControl";


const UserPart = (props) => {

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
            <div className={s.descriptionArea}>
                <div className={s.text}>Full name:</div>
                <div>{props.profile.fullName}</div>
            </div>
            <div className={s.descriptionArea}>
                <div className={s.text}>About me:</div>
                <div>{props.profile.aboutMe}</div>
            </div>
            <div className={s.descriptionArea}>
                <div className={s.text}>Looking for a job:</div>
                <div>{props.profile.lookingForAJob ? "Yes" : "No"}</div>
            </div>
            <div className={s.descriptionArea}>
                <div className={s.text}>Description:</div>
                <div>{props.profile.lookingForAJobDescription}</div>
            </div>
        </div>
    </div>
}

const LinksArea = (props) => <div className={s.links}>
    {Object.keys(props.contacts).map(key =>
        props.contacts[key]
            ? <div className={s.linksArea}>{key}: <a href={props.contacts[key]}
                                                     target="_blank">{props.contacts[key]}</a></div>
            : <div className={s.linksArea}>{key}: ...</div>
    )}
    {/*	TODO ебать ты просто гений*/}
</div>

const Buttons = (props) => <div className={s.buttons}>
    {/*TODO ну и нахуй страницу обнавлять, чтобы, чтобы измнения увидеть?*/}
    <div>
        <FollowControl userId={props.userId}
                       userFollowed={props.followed}
                       followingInProgress={props.followingInProgress}
                       followingUser={props.followingUser}
                       unfollowingUser={props.unfollowingUser}/>
    </div>
    <button className={s.button}>Copy link</button>
    {/*TODO и как это сделать?*/}
    <NavLink to={"/users"}>
        <button className={s.pbutton}>Back to users</button>
    </NavLink>
    {/*	TODO переделай этот позор.............. и придумай, как сделать для открытия своего профиля*/}
</div>


const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return <div className={s.profileInfo}>
        <UserPart profile={props.profile}
                  isOwner={props.isOwner}
                  savePhoto={props.savePhoto}/>
        <LinksArea contacts={props.profile.contacts}/>
        <UserStatus status={props.status}
                    updateStatus={props.updateStatus}/>
        {!props.isOwner && <Buttons followingUser={props.followingUser}
                 unfollowingUser={props.unfollowingUser}
                 followed={props.followed}
                 userId={props.profile.userId}
                 followingInProgress={props.followingInProgress}/>}
    </div>
}

export default ProfileInfo;