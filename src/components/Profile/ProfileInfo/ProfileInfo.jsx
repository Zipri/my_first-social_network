import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import UserStatus from "./ProfileStatus";
import s from "./ProfileInfo.module.css";
import {NavLink} from "react-router-dom";


const UserPart = (props) => <div className={s.userPart}>
    <div className={s.image}>
        <img className={s.image} src={props.profile.photos.large != null
            ? props.profile.photos.large
            : 'https://otvet.imgsmail.ru/download/15f4035d0a54e730e4c24b7a574cb20b_i-33.jpg'}/>
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
const LinksArea = (props) => <div className={s.links}>
    {Object.keys(props.contacts).map(key =>
        props.contacts[key]
            ? <div className={s.linksArea}>{key}: <a href={props.contacts[key]}
                                                     target="_blank">{props.contacts[key]}</a></div>
            : <div className={s.linksArea}>{key}: ...</div>
    )}
    {/*	TODO ебать ты просто гений*/}
</div>

const FollowButton = (props) => <button
    className={s.button}
    disabled={props.followingInProgress.some(id => id === props.userId)}
    onClick={() => props.followingUser(props.userId)}>✔️ Follow
</button>

const UnfollowButton = (props) => <button
    className={s.button}
    disabled={props.followingInProgress.some(id => id === props.userId)}
    onClick={() => props.unfollowingUser(props.userId)}>❌ Unfollow
</button>

const Buttons = (props) => <div className={s.buttons}>
    {/*TODO ну и нахуй страницу обнавлять, чтобы, чтобы измнения увидеть?
	*/}
    <div>
        {props.Followed
            ? <UnfollowButton userId={props.userId}
                              followingInProgress={props.followingInProgress}
                              unfollowingUser={props.unfollowingUser}/>
            : <FollowButton userId={props.userId}
                            followingInProgress={props.followingInProgress}
                            followingUser={props.followingUser}/>}
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
        <UserPart profile={props.profile}/>
        <LinksArea contacts={props.profile.contacts}/>
        <UserStatus status={props.status}
                    updateStatus={props.updateStatus}/>
        <Buttons followingUser={props.followingUser}
                 unfollowingUser={props.unfollowingUser}
                 Followed={props.Followed}
                 userId={props.profile.userId}
                 followingInProgress={props.followingInProgress}/>
        {/*	TODO Buttons - это повторение кода получается (как  в юзерах), получается - зашквар = выноси в отдельную компоненте или чет типа того*/}
    </div>
}

export default ProfileInfo;