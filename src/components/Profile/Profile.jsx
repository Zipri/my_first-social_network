import React from 'react'
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
	return (
		<div className={s.content}>
			<div>
				<img src='https://gazetaingush.ru/sites/default/files/pubs/obshchestvo/2021/05/priroda-ingushetii-1200x5401.jpg'/>
			</div>
			<div>
				<img src='https://lh3.googleusercontent.com/proxy/Ql5cOuWgISpIXwiNDA3dyHGC3wlLoqaDJihDkMh6n13xLspT3oFf2leI2YbvGWDf8MYc_sZaBipyA1x89jCDC65fD-rn_P7ekVtJs0f0kUT3KPKBJzklrne9yCb_1RZUy8q9GCXTbuM'/>
				ava + description
			</div>
			<MyPosts />
		</div>
	)
}

export default Profile;