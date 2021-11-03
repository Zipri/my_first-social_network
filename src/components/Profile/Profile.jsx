import React from 'react'

import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Background from "./Backgorund/Background";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

import s from './Profile.module.css'

const Profile = (props) => {
	return (
		<div className={s.profileWrapper}>
			<Background />
			<ProfileInfo />
			<MyPostsContainer />
		</div>
	)
};

export default Profile;