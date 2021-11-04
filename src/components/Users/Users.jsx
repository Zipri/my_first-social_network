import React from 'react';

import s from './Users.module.css'

const Users = (props) => {
	return <div className={s.users}>
		{props.users.map(u =>

			<div key={u.id} className={s.flex}>

				<div className={s.user}>
					<img src='https://slovnet.ru/wp-content/uploads/2018/12/7-67.jpg'/>
					<div className={s.userTextDescription}>
						<div className={s.userFullName}>
							{u.firstName + ' ' + u.lastName}
						</div>
						<div className={s.userStatus}>
							{u.status}
						</div>
						<div className={s.userLocation}>
							<splan>
								<div className={s.cityCountry}>
									<div>City:</div>
									<div>Country:</div>
								</div>
								<div className={s.userCityCountry}>
									<div>{u.location.city}</div>
									<div>{u.location.country}</div>
								</div>
							</splan>
						</div>
					</div>
				</div>

				<div>
					{u.followed
						? <button
								className={s.button}
								onClick={() => props.unfollowUser(u.id)}>❌ Unfollow</button>
						: <button
								className={s.button}
								onClick={() => props.followUser(u.id)}>✔️ Follow</button>}
				</div>

			</div>
		)}
	</div>
};

export default Users;