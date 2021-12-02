import React from 'react';
import {Field, reduxForm} from "redux-form";

import s from './MyPosts.module.css';


const Post = (props) => <div className={s.post}>
	<img src='https://goldenmost.ru/wp-content/uploads/2017/07/Kon2.jpg'/>
	<div className={s.postText}>
		<div>{props.postMessage}</div>
		<div className={s.likes}> 👍 {props.likes}</div>
	</div>
</div>

const MyPostsForm = (props) => {
	return <form onSubmit={props.handleSubmit} className={s.addPost}>
		<Field name={"newPostBody"}
					 component={"textarea"}
					 placeholder="Write a new post..."
		/>
		<button>+</button>
	</form>
}
const MyPostsReduxForm = reduxForm({form: "profileNewPostForm"})(MyPostsForm)

const MyPosts = (props) => {
	let addPost = (values) => props.addPost(values.newPostBody)
	return (
		<div className={s.myPosts}>
			<MyPostsReduxForm onSubmit={addPost}/>
			{props.posts.map(p => <Post postMessage={p.postMessage}
																	likes={p.likes}
																	id={p.id}/>)}
		</div>
	)
};

export default MyPosts;