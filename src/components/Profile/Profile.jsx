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
			<MyPosts
				newPostText={props.profilePage.newPostText}
				updateNewPostText={props.updateNewPostText}
				posts={props.profilePage.posts}
				addPost={props.addPost}/>
		</div>
	)
}

export default Profile;