import React from 'react'
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {

	let postsEl = props.posts
		.map(p => <Post
			message={p.message}
			likes={p.likes}
			id={p.id}/>)

	let newPostEl = React.createRef()

	let addPost = () => {
		let text = newPostEl.current.value;
		return (
			alert(text)
		)
	}

	return (
		<div className={s.myPosts}>
			<div className={s.addPost}>
				<textarea ref={newPostEl}/>
				{/*TODO Азъ Есьм Плохо, не стоит такой хуйнёй страдать*/}
				<button onClick={addPost}>+</button>
			</div>
			<div className={s.Posts}>
				{postsEl}
			</div>
		</div>
	)
}

export default MyPosts;