import React from 'react'
import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Background from "./Backgorund/Background";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
	return (
		<div className={s.profileWrapper}>
			<Background />
			<ProfileInfo />
			<MyPostsContainer
				store={props.store}/>
		</div>
	)
}

export default Profile;