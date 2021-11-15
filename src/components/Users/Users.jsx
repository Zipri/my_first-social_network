import React from 'react';
import axios from "axios";

import s from './Users.module.css';

let Button = (props) => {
	return <div>
		{props.u.followed
			? <button
				className={s.button}
				onClick={() => props.p.unfollowUser(props.u.id)}>❌ Unfollow</button>
			: <button
				className={s.button}
				onClick={() => props.p.followUser(props.u.id)}>✔️ Follow</button>}
	</div>
};
let UserLabel = (props) => {
	return <div className={s.user}>
		<img src='https://slovnet.ru/wp-content/uploads/2018/12/7-67.jpg'/>
		{/*TODO сделать аватарку по дефолту ... != null ? ... : "http//..."*/}
		<div className={s.userTextDescription}>
			<div className={s.userFullName}>
				{/*{props.u.firstName + ' ' + props.u.lastName}*/}
				{props.u.name}
			</div>
			<div className={s.userStatus}>
				{props.u.status}
			</div>
			<div className={s.userLocation}>
				<splan>
					<div className={s.cityCountry}>
						<div>City:</div>
						<div>Country:</div>
					</div>
					<div className={s.userCityCountry}>
						<div>props.u.location.city</div>
						<div>props.u.location.country</div>
					</div>
				</splan>
			</div>
		</div>
	</div>
};

class Users extends React.Component {

	componentDidMount() {
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
			.then(response => {
				this.props.setUsers(response.data.items)
				this.props.setTotalUsersCount(response.data.totalCount)
		})
	}
	onPageChanged = (pageNumber) => {
		this.props.setPage(pageNumber)
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
			.then(response => {
				this.props.setUsers(response.data.items)
		})
	}

	render() {

		let pagesCount = Math.ceil(this.props.totalUsersCount/this.props.pageSize)
		let pages = []
		for (let i = 1; i <= pagesCount; i++) {pages.push(i)}

		return <div className={s.users}>
			<div>
				{pages.map(p => <span>
					<button
						onClick={() => this.onPageChanged(p)}
						className={this.props.currentPage === p && s.selected}>
							{p}
					</button>
				</span>)}
			</div>
			{this.props.users.map(u =>
				<div key={u.id} className={s.flex}>
					<UserLabel u={u} />
					<Button p={this.props} u={u} />
				</div>
			)}
		</div>
	}
}



export default Users;