import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import UserStatus from "./ProfileStatus";
import s from "./ProfileInfo.module.css";


const UserPart = (props) => <div className={s.userPart}>
	<div className={s.image}>
		<img className={s.image} src={props.profile.photos.large != null
			? props.profile.photos.large
			: 'https://otvet.imgsmail.ru/download/15f4035d0a54e730e4c24b7a574cb20b_i-33.jpg'}/>
	</div>
	<div className={s.description}>
		<div className={s.descriptionArea}>
			<div className={s.text}>Full name:</div>
			<div>{props.profile.fullName}</div>
		</div>
		<div className={s.descriptionArea}>
			<div className={s.text}>About me:</div>
			<div>{props.profile.aboutMe}</div>
		</div>
		<div className={s.descriptionArea}>
			<div className={s.text}>Looking for a job:</div>
			<div>{props.profile.lookingForAJob ? "Yes" : "No"}</div>
		</div>
		<div className={s.descriptionArea}>
			<div className={s.text}>Description:</div>
			<div>{props.profile.lookingForAJobDescription}</div>
		</div>
	</div>
</div>
const LinksArea = (props) => <div className={s.links}>
	{Object.keys(props.contacts).map(key =>
		props.contacts[key]
			? <div className={s.linksArea}>{key}: <a href={props.contacts[key]}
																							 target="_blank">{props.contacts[key]}</a></div>
			: <div className={s.linksArea}>{key}: ...</div>
	)}
	{/*	TODO ебать ты просто гений*/}
</div>
const FollowButton = (props) => <button className={s.button}>
	✔️ Follow
</button>
const UnfollowButton = (props) => <button className={s.button}>
	❌ Unfollow
</button>
let t = true
const Buttons = (props) => <div className={s.buttons}>
	<div>
		{!t
			? <UnfollowButton/>
			: <FollowButton/>}
	</div>
	<button className={s.button}>Copy link</button>
	<button className={s.pbutton}>My Profile</button>
</div>

const ProfileInfo = (props) => {
	if (!props.profile) {
		return <Preloader/>
	}
	return <div className={s.profileInfo}>
		<UserPart profile={props.profile}/>
		<LinksArea contacts={props.profile.contacts}/>
		<UserStatus status={"new status"}/>
		<Buttons/>
	</div>
}

export default ProfileInfo;