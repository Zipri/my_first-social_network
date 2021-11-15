import React from 'react';
import {connect} from "react-redux";

import Users from "./Users";
import {currentPageAC, followAC, setUsersAC, totalUsersCountAC, unfollowAC} from "../../redux/users-reducer";


let mapStateToProps = (state) => {
	return {
		users: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		totalUsersCount: state.usersPage.totalUsersCount,
		currentPage: state.usersPage.currentPage
	}
};
let mapDispatchToProps = (dispatch) => {
	return {
		setUsers: (users) => {dispatch(setUsersAC(users))},
		followUser: (userId) => {dispatch(followAC(userId))},
		unfollowUser: (userId) => {dispatch(unfollowAC(userId))},
		setPage: (currentPage) => {dispatch(currentPageAC(currentPage))},
		setTotalUsersCount: (totalUsersCount) => {dispatch(totalUsersCountAC(totalUsersCount))}
	}
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;