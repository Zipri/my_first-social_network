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
				<Post />
				<Post />
			</div>
		</div>
	)
}

export default MyPosts;