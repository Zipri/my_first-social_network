import React, {useEffect} from 'react'
import s from './Profile.module.css'
import {useParams, withRouter} from "react-router-dom";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {
    getAuthUserId,
    getFollowed,
    getFollowingInProgress,
    getIsAuth, getPosts,
    getProfile,
    getStatus
} from "../../redux/getters-selectors";
import {compose} from "redux";
import {connect} from "react-redux";
import {
    addPost,
    getProfileStatusThunkCreator,
    getUserProfileThunkCreator, isFollowedThunkCreator, savePhoto, saveProfile,
    updateProfileStatusThunkCreator
} from "../../redux/profile-reducer";
import {followUserThunkCreator, unfollowUserThunkCreator} from "../../redux/users-reducer";
import MyPosts from "./MyPosts/MyPosts";
import Preloader from "../common/Preloader/Preloader";


const Profile = (props) => <div className={s.profileWrapper}>
    <div className={s.myPosts}>
        <MyPosts posts={props.posts}
                 addPost={props.addPost}
                 profile={props.profile}/>
    </div>
    <div className={s.profileInfo}>
        <ProfileInfo profile={props.profile}
                     isOwner={props.isOwner}
                     savePhoto={props.savePhoto}
                     saveProfile={props.saveProfile}
                     status={props.status}
                     updateStatus={props.updateStatus}
                     followingUser={props.followingUser}
                     unfollowingUser={props.unfollowingUser}
                     followed={props.followed}
                     followingInProgress={props.followingInProgress}/>
    </div>
</div>

const ProfileContainer = (props) => {
    const params = useParams(); // props.match.params. in hook (withRouter)

    useEffect(() => {
        refreshProfile()
    }, [params.userId])

    const refreshProfile = () => {
        let userId = params.userId
        if (!userId) {
            userId = props.authUserId
            if (!userId) props.history.push("/login")
        }
        props.getUserProfileThunkCreator(userId)
        props.getProfileStatusThunkCreator(userId)
        props.isFollowedThunkCreator(userId)
    }

    const followingUser = (userId) => props.followUserThunkCreator(userId)
    const unfollowingUser = (userId) => props.unfollowUserThunkCreator(userId)

    if (!props.profile) return <Preloader/>
    return <Profile profile={props.profile}
                    posts={props.posts}
                    addPost={props.addPost}
                    isOwner={!params.userId}
                    savePhoto={props.savePhoto}
                    saveProfile={props.saveProfile}
                    status={props.status}
                    updateStatus={props.updateProfileStatusThunkCreator}
                    followingUser={followingUser}
                    unfollowingUser={unfollowingUser}
                    followed={props.followed}
                    followingInProgress={props.followingInProgress}/>

};

let mapStateToProps = (state) => ({
    authUserId: getAuthUserId(state),
    isAuth: getIsAuth(state),
    profile: getProfile(state),
    posts: getPosts(state),
    status: getStatus(state),
    followed: getFollowed(state),
    followingInProgress: getFollowingInProgress(state)
});

export default compose(
    connect(
        mapStateToProps,
        {
            getUserProfileThunkCreator,
            getProfileStatusThunkCreator, updateProfileStatusThunkCreator,
            followUserThunkCreator, unfollowUserThunkCreator, isFollowedThunkCreator,
            savePhoto, saveProfile, addPost
        }),
    withRouter)
(ProfileContainer)