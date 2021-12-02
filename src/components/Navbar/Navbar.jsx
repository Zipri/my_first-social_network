import React from 'react'
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
	return (
		<nav className={s.nav}>

			{/*TODO добавить в navbar над владками меню пользователя - картинка и описание, ФИО*/}
			<div className={s.item}>
				<NavLink to="/profile" activeClassName={s.active}>
					Profile
				</NavLink>
			</div>

			<div className={s.item}>
				<NavLink to="/dialogs" activeClassName={s.active}>
					Messages
				</NavLink>
			</div>

			<div className={s.item}>
				<NavLink to="/news" activeClassName={s.active}>
					News
				</NavLink>
			</div>

			<div className={s.item}>
				<NavLink to="/users" activeClassName={s.active}>
					Users
				</NavLink>
			</div>

			<div className={s.item}>
				<NavLink to="/settings" activeClassName={s.active}>
					Settings
				</NavLink>
			</div>

			<div className={s.item}>
				<NavLink to="/login" activeClassName={s.active}>
					Login
				</NavLink>
			</div>

		</nav>
	)
}

export default Navbar;