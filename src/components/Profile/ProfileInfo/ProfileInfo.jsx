import React from 'react'
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
	return (
		<div className={s.profileInfo}>
			<div className={s.image}>
				<img src='https://otvet.imgsmail.ru/download/15f4035d0a54e730e4c24b7a574cb20b_i-33.jpg'/>
			</div>
			<div className={s.description}>
				Есть люди, которые несут разрушение и хаос, есть такие, кто приносит — любовь и добро. Есть и такие, что несут
				порядок и справедливость. И есть я. Я несу пакетик.
			</div>
		</div>
	)
}

export default ProfileInfo;