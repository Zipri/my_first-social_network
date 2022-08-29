import React, {useEffect, useState} from "react";
import Preloader from "../../common/Preloader/Preloader";
import UserStatus from "./ProfileStatus";
import s from "./ProfileInfo.module.css";
import {NavLink} from "react-router-dom";
import FollowControl from "../../common/FollowControl/FollowControl";
import UserPart from "./UserPart";

const Buttons = (props) => <div className={s.buttons}>
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
    const [followed, setFollowed] = useState(props.followed)
    useEffect(() => setFollowed(props.followed), [props.followed])
    // использовал локальный стейт для динамического отображения изменений на странице
    // т.к. props.followingUser - изменяет его только для users-reducers
    const followingUser = (userId) => {
        props.followingUser(userId)
        setFollowed(true)
    }
    const unfollowingUser = (userId) => {
        props.unfollowingUser(userId)
        setFollowed(false)
    }

    if (!props.profile) {
        return <Preloader/>
    }

    return <div className={s.profileInfo}>
        <UserPart profile={props.profile}
                  isOwner={props.isOwner}
                  saveProfile={props.saveProfile}
                  savePhoto={props.savePhoto}/>
        <UserStatus status={props.status}
                    isOwner={props.isOwner}
                    updateStatus={props.updateStatus}/>
        {!props.isOwner && <Buttons followingUser={followingUser}
                                    unfollowingUser={unfollowingUser}
                                    followed={followed}
                                    userId={props.profile.userId}
                                    followingInProgress={props.followingInProgress}/>}
    </div>
}

export default ProfileInfo;