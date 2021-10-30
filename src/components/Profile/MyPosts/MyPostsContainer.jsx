import React from 'react'
import MyPosts from "./MyPosts";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";

const MyPostsContainer = (props) => {

	let state = props.store.getState()

	let addPost = () => {
		props.store.dispatch(addPostActionCreator())
	}

	let updateNewPostText = (text) => {
		props.store.dispatch(updateNewPostTextActionCreator(text))
	}

	return (
		<MyPosts
			newPostText={state.profilePage.newPostText}
			posts={state.profilePage.posts}

			changeNewPost = {updateNewPostText}
			addNewPost = {addPost}
		/>
	)
}

export default MyPostsContainer;