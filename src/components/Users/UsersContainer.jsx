import React from 'react';
import {connect} from "react-redux";

import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {
    followUser, followUserThunkCreator, getFriendsThunkCreator, getUsersThunkCreator,
    setCurrentPage, toggleFollowingProgress,
    unfollowUser, unfollowUserThunkCreator
} from "../../redux/users-reducer";
import {
    getCurrentFriendPage,
    getCurrentPage, getFollowingInProgress,
    getFriends,
    getIsAuth, getIsFetching,
    getPageSize, getTotalFriendsCount,
    getTotalUsersCount,
    getUsers
} from "../../redux/getters-selectors";


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)
        this.props.getFriendsThunkCreator(this.props.currentFriendPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber) =>
        this.props.getUsersThunkCreator(pageNumber, this.props.pageSize)
    onFriendPageChanged = (pageNumber) =>
        this.props.getFriendsThunkCreator(pageNumber, this.props.pageSize)

    followingUser = (userId) =>
        this.props.followUserThunkCreator(userId)
    unfollowingUser = (userId) =>
        this.props.unfollowUserThunkCreator(userId)

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages = []
        for (let i = 1; i <= pagesCount; i++) pages.push(i)

        let pagesFriendsCount = Math.ceil(this.props.totalFriendsCount / this.props.pageSize)
        let friendPages = []
        for (let i = 1; i <= pagesFriendsCount; i++) friendPages.push(i)

        return <>
            {this.props.isFetching
                //TODO добавить везде эту хуету с прелодарем
                ? <Preloader/>
                : <Users isAuth={this.props.isAuth}

                         pages={pages}
                         onPageChanged={this.onPageChanged}
                         currentPage={this.props.currentPage}

                         friendPages={friendPages}
                         onFriendPageChanged={this.onFriendPageChanged}
                         currentFriendPage={this.props.currentFriendPage}

                         users={this.props.users}
                         friends={this.props.friends}

                         followingUser={this.followingUser}
                         unfollowingUser={this.unfollowingUser}
                         followingInProgress={this.props.followingInProgress}/>}
        </>
    }
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
        currentFriendPage: getCurrentFriendPage(state),

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
