import React from 'react'
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {

	let postsEl = props.postsData
		.map(p => <Post
			message={p.message}
			likes={p.likes}
			id={p.id}
		/>)

	return (
		<div className={s.myPosts}>
			<div className={s.addPost}>
				<textarea/>
				<button>+</button>
			</div>
			<div className={s.Posts}>
				{postsEl}
			</div>
		</div>
	)
}

export default MyPosts;