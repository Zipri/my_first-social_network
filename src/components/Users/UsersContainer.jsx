import React from 'react';
import {connect} from "react-redux";

import Users from "./Users";
import {followAC, setUsersAC, unfollowAC} from "../../redux/users-reducer";


let mapStateToProps = (state) => {
	return {
		users: state.usersPage.users
	}
};
let mapDispatchToProps = (dispatch) => {
	return {
		setUsers: (users) => {dispatch(setUsersAC(users))},
		followUser: (userId) => {dispatch(followAC(userId))},
		unfollowUser: (userId) => {dispatch(unfollowAC(userId))}
	}
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;