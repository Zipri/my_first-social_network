import React from 'react'

import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Preloader from "../common/Preloader/Preloader";

import s from './Profile.module.css'

const Background = () => <div className={s.background}>
	<img src='https://gazetaingush.ru/sites/default/files/pubs/obshchestvo/2021/05/priroda-ingushetii-1200x5401.jpg'/>
</div>

const ProfileInfo = (props) => {
	if (!props.profile) {
		return <Preloader/>
	}
	return <div className={s.flex}>
		<div className={s.profileInfo}>
			<div className={s.image}>
				<img className={s.image} src={props.profile.photos.large != null
					? props.profile.photos.large
					: 'https://otvet.imgsmail.ru/download/15f4035d0a54e730e4c24b7a574cb20b_i-33.jpg'}/>
			</div>
			<div className={s.description}>
				<div className={s.descriptionArea}>
					<div className={s.text}>Full name: </div>
					<div>{props.profile.fullName}</div>
				</div>
				<div className={s.descriptionArea}>
					<div className={s.text}>About me: </div>
					<div>{props.profile.aboutMe}</div>
				</div>
				<div className={s.descriptionArea}>
					<div className={s.text}>Looking for a job: </div>
					<div>{props.profile.lookingForAJob ? "Yes" : "No"}</div>
				</div>
				<div className={s.descriptionArea}>
					<div className={s.text}>Description: </div>
					<div>{props.profile.lookingForAJobDescription}</div>
				</div>
			</div>
		</div>
		<div className={s.links}>
			<div className={s.linksArea} >Facebook: <a href={props.profile.contacts.facebook} target="_blank">{props.profile.contacts.facebook}</a></div>
			<div className={s.linksArea} >Website: <a href={props.profile.contacts.website} target="_blank">{props.profile.contacts.website}</a></div>
			<div className={s.linksArea} >VK: <a href={props.profile.contacts.vk} target="_blank">{props.profile.contacts.vk}</a></div>
			<div className={s.linksArea} >twitter: <a href={props.profile.contacts.twitter} target="_blank">{props.profile.contacts.twitter}</a></div>
			<div className={s.linksArea} >instagram: <a href={props.profile.contacts.instagram} target="_blank">{props.profile.contacts.instagram}</a></div>
			<div className={s.linksArea} >youtube: <a href={props.profile.contacts.youtube} target="_blank">{props.profile.contacts.youtube}</a></div>
			<div className={s.linksArea} >github: <a href={props.profile.contacts.github} target="_blank">{props.profile.contacts.github}</a></div>
			<div className={s.linksArea} >MainLink: <a href={props.profile.contacts.mainLink} target="_blank">{props.profile.contacts.mainLink}</a></div>
		</div>
	</div>
}


const Profile = (props) => {
	return (
		<div className={s.profileWrapper}>
			<Background/>
			<ProfileInfo profile={props.profile}/>
			<MyPostsContainer/>
		</div>
	)
};


export default Profile;