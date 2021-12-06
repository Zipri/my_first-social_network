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
										 Followed={this.props.Followed}
										 followingInProgress={this.props.followingInProgress}/>
	}
};

let mapStateToProps = (state) => ({
	authUserId: state.auth.userId,
	isAuth: state.auth.isAuth,
	profile: state.profilePage.profile,
	status: state.profilePage.status,
	Followed: state.profilePage.Followed,
	followingInProgress: state.usersPage.followingInProgress,
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