import React from 'react';
import {connect} from "react-redux";

import MyPosts from "./MyPosts";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";

let mapStateToProps = (state) => {
	return {
		newPostText: state.profilePage.newPostText,
		posts: state.profilePage.posts
	}
};
let mapDispatchToProps = (dispatch) => {
	return {
		changeNewPost: (text) => {dispatch(updateNewPostTextActionCreator(text))},
 		addNewPost: () => {dispatch(addPostActionCreator())}
	}
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;