import React, {useEffect, useState} from "react";
import UserStatus from "./ProfileStatus";
import s from "./ProfileInfo.module.css";
import UserPart from "./UserPart";


const ProfileInfo = (props) => {
    const [followed, setFollowed] = useState(props.followed)
    useEffect(() => setFollowed(props.followed), [props.followed])
    // ^ использовал локальный стейт для динамического отображения изменений на странице
    // т.к. props.followingUser - изменяет его только для users-reducers
    const followingUser = (userId) => {
        props.followingUser(userId)
        setFollowed(true)
    }
    const unfollowingUser = (userId) => {
        props.unfollowingUser(userId)
        setFollowed(false)
    }

    return <div className={s.profileInfo}>
        <UserStatus status={props.status}
                    isOwner={props.isOwner}
                    updateStatus={props.updateStatus}/>
        <UserPart profile={props.profile}
                  isOwner={props.isOwner}
                  saveProfile={props.saveProfile}
                  savePhoto={props.savePhoto}
                  followingUser={followingUser}
                  unfollowingUser={unfollowingUser}
                  followed={followed}
                  followingInProgress={props.followingInProgress}/>
    </div>
}

export default ProfileInfo;