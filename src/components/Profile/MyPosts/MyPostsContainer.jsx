import React from 'react';
import {connect} from "react-redux";

import MyPosts from "./MyPosts";
import {addPost, updateNewPostBody} from "../../../redux/profile-reducer";

let mapStateToProps = (state) => {
	return {
		newPostText: state.profilePage.newPostText,
		posts: state.profilePage.posts
	}
};

const MyPostsContainer = connect(
	mapStateToProps,
	{addPost, updateNewPostBody})
(MyPosts);

export default MyPostsContainer;