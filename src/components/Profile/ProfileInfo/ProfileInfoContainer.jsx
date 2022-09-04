import React, {useEffect} from 'react'
import {connect} from "react-redux";
import {useParams, withRouter} from "react-router-dom";
import {compose} from "redux";

import ProfileInfo from "./ProfileInfo";
import {
    getProfileStatusThunkCreator,
    getUserProfileThunkCreator, isFollowedThunkCreator, savePhoto, saveProfile,
    updateProfileStatusThunkCreator
} from "../../../redux/profile-reducer";
import {followUserThunkCreator, unfollowUserThunkCreator} from "../../../redux/users-reducer";
import {
    getAuthUserId,
    getFollowed,
    getFollowingInProgress,
    getIsAuth,
    getProfile,
    getStatus
} from "../../../redux/getters-selectors";


const ProfileInfoContainer = (props) => {
    const params = useParams(); // props.match.params. in hook (withRouter)

    useEffect(() => {
        refreshProfile()
    }, [params.userId])

    const refreshProfile = () => {
        let userId = params.userId
        if (!userId) {
            userId = props.authUserId
            if (!userId) props.history.push("/login")
        }
        props.getUserProfileThunkCreator(userId)
        props.getProfileStatusThunkCreator(userId)
        props.isFollowedThunkCreator(userId)
    }

    const followingUser = (userId) => props.followUserThunkCreator(userId)
    const unfollowingUser = (userId) => props.unfollowUserThunkCreator(userId)

    return <ProfileInfo profile={props.profile}
                        isOwner={!params.userId}
                        savePhoto={props.savePhoto}
                        saveProfile={props.saveProfile}
                        status={props.status}
                        updateStatus={props.updateProfileStatusThunkCreator}
                        followingUser={followingUser}
                        unfollowingUser={unfollowingUser}
                        followed={props.followed}
                        followingInProgress={props.followingInProgress}/>

};

let mapStateToProps = (state) => ({
    authUserId: getAuthUserId(state),
    isAuth: getIsAuth(state),
    profile: getProfile(state),
    status: getStatus(state),
    followed: getFollowed(state),
    followingInProgress: getFollowingInProgress(state)
});

export default compose(
    connect(
        mapStateToProps,
        {
            getUserProfileThunkCreator,
            getProfileStatusThunkCreator, updateProfileStatusThunkCreator,
            followUserThunkCreator, unfollowUserThunkCreator, isFollowedThunkCreator,
            savePhoto, saveProfile
        }),
    withRouter)
(ProfileInfoContainer)