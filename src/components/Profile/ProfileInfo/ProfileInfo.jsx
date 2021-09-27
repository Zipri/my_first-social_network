import React from 'react'
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
	return (
		<div>
			<div className={s.background}>
				<img src='https://gazetaingush.ru/sites/default/files/pubs/obshchestvo/2021/05/priroda-ingushetii-1200x5401.jpg'/>
			</div>
			<div className={s.description}>
				<img src='https://otvet.imgsmail.ru/download/15f4035d0a54e730e4c24b7a574cb20b_i-33.jpg'/>
				ava + description
			</div>
		</div>
	)
}

export default ProfileInfo;