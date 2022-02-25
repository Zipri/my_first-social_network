import React from 'react';
import {connect} from "react-redux";

import MyPosts from "./MyPosts";
import {addPost} from "../../../redux/profile-reducer";
import {getPosts} from "../../../redux/getters-selectors";

let mapStateToProps = (state) => {
    return {
        posts: getPosts(state)
    }
};

const MyPostsContainer = connect(
    mapStateToProps,
    {addPost})
(MyPosts);

export default MyPostsContainer;