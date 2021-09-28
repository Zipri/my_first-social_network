import React from 'react'
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Background from "./Backgorund/Background";

const Profile = (props) => {
	return (
		<div className={s.profileWrapper}>
			<Background />
			<ProfileInfo />
			<MyPosts posts={props.posts} />
		</div>
	)
}

export default Profile;