import React from 'react';
import {connect} from "react-redux";

import {
	followUser,
	setCurrentPage,
	setTotalUsersCount,
	setUsers,
	toggleIsFetching,
	unfollowUser
} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {usersApi} from "../../api/api";


class UsersContainer extends React.Component {
	componentDidMount() {
		this.props.toggleIsFetching(true)
		usersApi.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
			this.props.toggleIsFetching(false)
			this.props.setUsers(data.items)
			this.props.setTotalUsersCount(data.totalCount)
		})
	}

	onPageChanged = (pageNumber) => {
		this.props.toggleIsFetching(true)
		this.props.setCurrentPage(pageNumber)
		usersApi.getUsers(pageNumber, this.props.pageSize).then(data => {
			this.props.toggleIsFetching(false)
			this.props.setUsers(data.items)
		})
	}

	render() {
		let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
		let pages = []
		for (let i = 900; i <= 907; i++) {
			pages.push(i)
		}
		pages.push(pagesCount)

		return <>
			{this.props.isFetching ? <Preloader/> : null}
			<Users pages={pages}
						 onPageChanged={this.onPageChanged}
						 currentPage={this.props.currentPage}
						 users={this.props.users}
						 unfollowUser={this.props.unfollowUser}
						 followUser={this.props.followUser}/>
		</>
	}
};


let mapStateToProps = (state) => {
	return {
		users: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		totalUsersCount: state.usersPage.totalUsersCount,
		currentPage: state.usersPage.currentPage,
		isFetching: state.usersPage.isFetching
	}
};

export default connect(
	mapStateToProps,
	{setUsers, followUser, unfollowUser, setCurrentPage, setTotalUsersCount, toggleIsFetching})
(UsersContainer);
;