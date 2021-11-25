import React from 'react'

import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

import s from './Profile.module.css'


const Background = () => <div className={s.background}>
	<img src='https://gazetaingush.ru/sites/default/files/pubs/obshchestvo/2021/05/priroda-ingushetii-1200x5401.jpg'/>
</div>

const Profile = (props) => {
	return (
		<div className={s.profileWrapper}>
			<Background />
			<ProfileInfo profile={props.profile} />
			<MyPostsContainer />
		</div>
	)
};


export default Profile;