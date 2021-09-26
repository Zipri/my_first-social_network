import React from 'react'
import s from './Navbar.module.css'

const Navbar = () => {
	return (
		<nav className={s.nav}>
			{/*TODO добавить в navbar над владками меню пользователя - картинка и описание, ФИО*/}
			<div className={s.item}>
				<a href="/profile">Profile</a>
			</div>

			<div className={s.item}>
				<a href="/dialogs">Messages</a>
			</div>

			<div className={s.item}>
				<a href="/news">News</a>
			</div>

			<div className={s.item}>
				<a href="/music">Music</a>
			</div>

			<div className={s.item}>
				<a href="/settings">Settings</a>
			</div>

		</nav>
	)
}

export default Navbar;