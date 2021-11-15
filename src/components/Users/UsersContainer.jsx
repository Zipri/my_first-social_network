import React from 'react';
import {connect} from "react-redux";
import axios from "axios";

import {
	currentPageAC,
	followAC,
	isFetchingAC,
	setUsersAC,
	totalUsersCountAC,
	unfollowAC
} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";

class UsersAPI extends React.Component {
	componentDidMount() {
		this.props.toggleIsFetching(true)
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
			.then(response => {
				this.props.toggleIsFetching(false)
				this.props.setUsers(response.data.items)
				this.props.setTotalUsersCount(response.data.totalCount)
			})
	}
	onPageChanged = (pageNumber) => {
		this.props.toggleIsFetching(true)
		this.props.setPage(pageNumber)
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
			.then(response => {
				this.props.toggleIsFetching(false)
				this.props.setUsers(response.data.items)
			})
	}

	render() {
		let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
		let pages = []
		for (let i = 100; i <= 120; i++) {
			pages.push(i)
		}
		pages.push(pagesCount)

		return <>
			{this.props.isFetching ? <Preloader /> : null}
			<Users pages={pages}
						 onPageChanged={this.onPageChanged}
						 currentPage={this.props.currentPage}
						 users={this.props.users}
						 unfollowUser={this.props.unfollowUser}
						 followUser={this.props.followUser}/>
		</>
	}
}

let mapStateToProps = (state) => {
	return {
		users: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		totalUsersCount: state.usersPage.totalUsersCount,
		currentPage: state.usersPage.currentPage,
		isFetching: state.usersPage.isFetching
	}
};
let mapDispatchToProps = (dispatch) => {
	return {
		setUsers: (users) => dispatch(setUsersAC(users)),
		followUser: (userId) => dispatch(followAC(userId)),
		unfollowUser: (userId) => dispatch(unfollowAC(userId)),
		setPage: (currentPage) => dispatch(currentPageAC(currentPage)),
		setTotalUsersCount: (totalUsersCount) => dispatch(totalUsersCountAC(totalUsersCount)),
		toggleIsFetching: (isFetching) => dispatch(isFetchingAC(isFetching))
	}
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPI);

export default UsersContainer;