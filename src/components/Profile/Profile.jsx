import React from 'react'

import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfoContainer from "./ProfileInfo/ProfileInfoContainer";

import s from './Profile.module.css'


const Profile = () => <div className={s.profileWrapper}>
    <ProfileInfoContainer/>
    <MyPostsContainer/>
</div>


export default Profile;