import React from 'react'
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
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


class ProfileContainer extends React.Component {
    refreshProfile() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.authUserId
            if (!userId) this.props.history.push("/login")
        }
        this.props.getUserProfileThunkCreator(userId)
        this.props.getProfileStatusThunkCreator(userId)
        this.props.isFollowedThunkCreator(userId)
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile()
        }
    }

    followingUser = (userId) =>
        this.props.followUserThunkCreator(userId)
    unfollowingUser = (userId) =>
        this.props.unfollowUserThunkCreator(userId)

    render() {
        return <ProfileInfo profile={this.props.profile}
                            isOwner={!this.props.match.params.userId}
                            savePhoto={this.props.savePhoto}
                            saveProfile={this.props.saveProfile}
                            status={this.props.status}
                            updateStatus={this.props.updateProfileStatusThunkCreator}
                            followingUser={this.followingUser}
                            unfollowingUser={this.unfollowingUser}
                            followed={this.props.followed}
                            followingInProgress={this.props.followingInProgress}/>
    }
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
(ProfileContainer)