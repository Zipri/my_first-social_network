import React from 'react'
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {

	let postsData = [
		{id: 1, message: 'Hello world', likes: 4},
		{id: 2, message: 'Ебиссь оно конём', likes: 13},
		{id: 3, message: '.أنا أكره هذه العبارةა', likes: 76},
	]
	let postsEl = postsData
		.map(p => <Post message={p.message} likes={p.likes} id={p.id} />)

	return (
		<div className={s.postsBlock}>
			<div>
				my posts
				<div>
					<textarea/>
					<button>Кнопка</button>
				</div>
			</div>
			<div>
				{postsEl}
			</div>
		</div>
	)
}

export default MyPosts;