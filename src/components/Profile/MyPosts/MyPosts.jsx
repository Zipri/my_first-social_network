import React from 'react';

import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {

	let postsEl = props.posts
		.map(p => <Post
			postMessage={p.postMessage}
			likes={p.likes}
			id={p.id}/>);

	let newPostEl = React.createRef();

	let addPost = () => {
		props.addPost()
	};

	let onPostChange = () => {
		let text = newPostEl.current.value
		props.updateNewPostBody(text)
	};

	return (
		<div className={s.myPosts}>
			<div className={s.addPost}>
				<textarea
					placeholder="Write a new post..."
					ref={newPostEl}
					value={props.newPostText}
					onChange={onPostChange}/>
				<button onClick={addPost}>+</button>
			</div>
			<div>
				{postsEl}
			</div>
		</div>
	)
};

export default MyPosts;