import React from 'react'
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {compose} from "redux";

import Profile from "./Profile";
import {
    getProfileStatusThunkCreator,
    getUserProfileThunkCreator, isFollowedThunkCreator,
    updateProfileStatusThunkCreator
} from "../../redux/profile-reducer";
import {followUserThunkCreator, unfollowUserThunkCreator} from "../../redux/users-reducer";
import {
    getAuthUserId,
    getFollowed,
    getFollowingInProgress,
    getIsAuth,
    getProfile,
    getStatus
} from "../../redux/getters-selectors";


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.authUserId
            if (!userId) this.props.history.push("/login")
        }
        this.props.getUserProfileThunkCreator(userId)
        this.props.getProfileStatusThunkCreator(userId)
        this.props.isFollowedThunkCreator(userId)
    }

    followingUser = (userId) =>
        this.props.followUserThunkCreator(userId)
    unfollowingUser = (userId) =>
        this.props.unfollowUserThunkCreator(userId)

    render() {
        return <Profile  {...this.props}
                         profile={this.props.profile}
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
            followUserThunkCreator, unfollowUserThunkCreator, isFollowedThunkCreator
        }),
    withRouter)
(ProfileContainer)