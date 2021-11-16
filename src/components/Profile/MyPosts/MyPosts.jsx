import React from 'react';

import s from './MyPosts.module.css';

const Post = (props) => <div className={s.post}>
	<img src='https://goldenmost.ru/wp-content/uploads/2017/07/Kon2.jpg'/>
	<div className={s.postText}>
		<div>{props.postMessage}</div>
		<div className={s.likes}> 👍 {props.likes}</div>
	</div>
</div>

const MyPosts = (props) => {

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
				{props.posts
					.map(p =>
						<Post
							postMessage={p.postMessage}
							likes={p.likes}
							id={p.id}/>
					)}
			</div>
		</div>
	)
};

export default MyPosts;