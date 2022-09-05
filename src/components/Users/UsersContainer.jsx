import React, {useEffect} from 'react';
import {connect} from "react-redux";

import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {
    followUser, followUserThunkCreator, getFriendsThunkCreator, getUsersThunkCreator,
    setCurrentPage, toggleFollowingProgress,
    unfollowUser, unfollowUserThunkCreator
} from "../../redux/users-reducer";
import {
    getCurrentPage, getFollowingInProgress,
    getFriends,
    getIsAuth, getIsFetching,
    getPageSize, getTotalFriendsCount,
    getTotalUsersCount,
    getUsers
} from "../../redux/getters-selectors";


const UsersContainer = (props) => {
    useEffect(() => {
        props.getUsersThunkCreator(props.currentPage, props.pageSize)
        props.getFriendsThunkCreator()
    }, [])

    const onPageChanged = (pageNumber) =>
        props.getUsersThunkCreator(pageNumber, props.pageSize)

    const followingUser = (userId) => props.followUserThunkCreator(userId)
    const unfollowingUser = (userId) => props.unfollowUserThunkCreator(userId)

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) pages.push(i)

    return <>
        {props.isFetching
            ? <Preloader/>
            : <Users isAuth={props.isAuth}

                     pages={pages}
                     onPageChanged={onPageChanged}
                     currentPage={props.currentPage}

                     users={props.users}
                     friends={props.friends}
                     totalFriendsCount={props.totalFriendsCount}

                     followingUser={followingUser}
                     unfollowingUser={unfollowingUser}
                     followingInProgress={props.followingInProgress}/>}
    </>

};


let mapStateToProps = (state) => {
    return {
        isAuth: getIsAuth(state),
        users: getUsers(state),
        friends: getFriends(state),

        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        totalFriendsCount: getTotalFriendsCount(state),

        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    }
};

export default connect(
    mapStateToProps,
    {
        followUser, unfollowUser, setCurrentPage, toggleFollowingProgress,
        getUsersThunkCreator, getFriendsThunkCreator,
        followUserThunkCreator, unfollowUserThunkCreator
    })
(UsersContainer);
