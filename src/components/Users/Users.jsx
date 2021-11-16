import React from 'react';
import {NavLink} from "react-router-dom";

import s from './Users.module.css';

let Button = (props) => {
	return <div>
		<div>
			{props.u.followed
				? <button
					className={s.button}
					onClick={() => props.p.unfollowUser(props.u.id)}>❌ Unfollow</button>
				: <button
					className={s.button}
					onClick={() => props.p.followUser(props.u.id)}>✔️ Follow</button>}
		</div>
		<div>
			<NavLink to={"/profile/"+props.u.id} target="_blank"><button className={s.button}>New tab</button></NavLink>
			{/*	TODO переделай этот позор..............*/}
		</div>
	</div>
};
let UserLabel = (props) => {
	return <div className={s.user}>
		<NavLink to={"/profile/"+props.u.id} className={s.min}>
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
		<button>❮</button>
		{props.pages.map(p => <span>
					<button
						onClick={() => props.onPageChanged(p)}
						className={props.currentPage === p && s.selected}>
							{p}
					</button>
				</span>)}
		<button>❯</button>
	</div>
};

const Users = (props) => {

	return <div className={s.users}>
		<PageSlider
			pages={props.pages}
			onPageChanged={props.onPageChanged}
			currentPage={props.currentPage}/>
		{props.users.map(u =>
			<div key={u.id} className={s.flex}>
				<UserLabel u={u}/>
				<Button p={props} u={u}/>
			</div>
		)}
	</div>
}

export default Users;