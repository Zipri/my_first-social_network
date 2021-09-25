import React from 'react'
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
	return (
		<div>
			<div>
				my posts
				<div>
					<textarea/>
					<button>Кнопка</button>
				</div>
			</div>
			<div>
				<Post message='Hello world' likes='4' />
				<Post message='Ебиссь оно конём' likes='13' />
				<Post message='.أنا أكره هذه العبارةა' likes='76' />
			</div>
		</div>
	)
}

export default MyPosts;