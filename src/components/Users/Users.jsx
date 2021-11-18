import React from 'react';
import {NavLink} from "react-router-dom";

import {usersApi} from "../../api/api";

import s from './Users.module.css';


let UnfollowButton = (props) => {
	return <button
		className={s.button}
		onClick={() =>
			usersApi.unfollowUser(props.u.id).then(data => {
				if (data.resultCode === 0) props.p.unfollowUser(props.u.id)
			})}>❌ Unfollow
	</button>
};
let FollowButton = (props) => {
	return <button
		className={s.button}
		onClick={() => {
			usersApi.followUser(props.u.id).then(data => {
					if (data.resultCode === 0) props.p.followUser(props.u.id)
				})
		}}>✔️ Follow
	</button>
};

let Button = (props) => {
	return <div>
		<div>
			{props.user.followed
				? <UnfollowButton u={props.user} p={props.p}/>
				: <FollowButton u={props.user} p={props.p}/>}
		</div>
		<div>
			<NavLink to={"/profile/" + props.user.id} target="_blank">
				<button className={s.button}>New tab</button>
			</NavLink>
			{/*	TODO переделай этот позор..............*/}
		</div>
	</div>
};
let UserLabel = (props) => {
	return <div className={s.user}>
		<NavLink to={"/profile/" + props.u.id} className={s.min}>
			<img src={props.u.photos.large != null
				? props.u.photos.large
				: 'https://slovnet.ru/wp-content/uploads/2018/12/7-67.jpg'}/>
		</NavLink>

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
let PageSlider = (props) => {
	return <div>
		<button className={s.pageButton}>❮</button>

		{props.pages.map(p => <span>
					<button
						onClick={() => props.onPageChanged(p)}
						className={props.currentPage === p && s.selected || s.pageButton}>
							{p}
					</button>
				</span>)}

		<button className={s.pageButton}>❯</button>
	</div>
};

const Users = (props) => {

	return <div className={s.users}>
		<PageSlider
			pages={props.pages}
			onPageChanged={props.onPageChanged}
			currentPage={props.currentPage}/>
		{props.users.map(user =>
			<div key={user.id} className={s.flex}>
				<UserLabel u={user}/>
				<Button p={props} user={user}/>
			</div>
		)}
	</div>
};

export default Users;