import React from 'react';
import {connect} from "react-redux";

import {
	followUser, followUserThunkCreator, getFriendsThunkCreator, getUsersThunkCreator,
	setCurrentPage, toggleFollowingProgress,
	unfollowUser, unfollowUserThunkCreator
} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";


class UsersContainer extends React.Component {
	componentDidMount() {
		this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)
		this.props.getFriendsThunkCreator()
	}

	onPageChanged = (pageNumber) =>
		this.props.getUsersThunkCreator(pageNumber, this.props.pageSize)

	followingUser = (userId) =>
		this.props.followUserThunkCreator(userId)

	unfollowingUser = (userId) =>
		this.props.unfollowUserThunkCreator(userId)

	render() {
		let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
		let pages = []
		for (let i = 800; i <= 807; i++) pages.push(i)
		pages.push(pagesCount)
		return <>
			{this.props.isFetching
				? <Preloader/>
				: <Users
					isAuth={this.props.isAuth}
					pages={pages}
					onPageChanged={this.onPageChanged}
					currentPage={this.props.currentPage}
					users={this.props.users}
					friends={this.props.friends}
					followingUser={this.followingUser}
					unfollowingUser={this.unfollowingUser}
					followingInProgress={this.props.followingInProgress}/>}
		</>
	}
};


let mapStateToProps = (state) => {
	return {
		isAuth: state.auth.isAuth,
		users: state.usersPage.users,
		friends: state.usersPage.friends,
		pageSize: state.usersPage.pageSize,
		totalUsersCount: state.usersPage.totalUsersCount,
		currentPage: state.usersPage.currentPage,
		isFetching: state.usersPage.isFetching,
		followingInProgress: state.usersPage.followingInProgress
	}
};

export default connect(
	mapStateToProps,
	{
		followUser, unfollowUser, setCurrentPage, toggleFollowingProgress,
		getUsersThunkCreator, getFriendsThunkCreator,
		followUserThunkCreator, unfollowUserThunkCreator
	})
(UsersContainer);
