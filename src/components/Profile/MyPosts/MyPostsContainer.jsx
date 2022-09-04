import React, {useEffect} from 'react';
import {connect} from "react-redux";

import MyPosts from "./MyPosts";
import {addPost, getUserProfileThunkCreator} from "../../../redux/profile-reducer";
import {getPosts, getProfile} from "../../../redux/getters-selectors";
import {useParams} from "react-router-dom";
import Preloader from "../../common/Preloader/Preloader";

const MyPostsContainer = (props) => {
    const params = useParams(); // props.match.params. in hook (withRouter)
    useEffect(() => {getUserProfileThunkCreator(params.userId)}, [])
    if (!props.profile) return <Preloader/>
    return <MyPosts posts={props.posts}
                    profile={props.profile}/>
}

let mapStateToProps = (state) => {
    return {
        posts: getPosts(state),
        profile: getProfile(state)
    }
};

export default connect(
    mapStateToProps,
    {addPost, getUserProfileThunkCreator})
(MyPostsContainer);