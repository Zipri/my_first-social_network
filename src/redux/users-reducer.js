import {usersApi} from "../api/api";
import {updateObjectArray} from "./object-helper";
import noAvatar from "../assets/noAvatar.png";

const SET_USERS = 'users/SET-USERS';
const SET_FRIENDS = 'users/SET-FRIENDS';

const FOLLOW = 'users/FOLLOW';
const UNFOLLOW = 'users/UNFOLLOW';

const SET_CURRENT_PAGE = 'users/SET-CURRENT-PAGE';
const SET_TOTAL_COUNT_USERS = 'users/SET-TOTAL-COUNT-USERS';
const SET_TOTAL_COUNT_FRIENDS = 'users/SET-TOTAL-COUNT-FRIENDS';

const TOGGLE_IS_FETCHING = 'users/TOGGLE-IS-FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'users/TOGGLE-IS-FOLLOWING-PROGRESS';

let initialState = {
    users: [],
    friends: [],

    pageSize: 7,
    totalUsersCount: 0,
    currentPage: 1,
    totalFriendsCount: 0,

    isFetching: false,
    followingInProgress: []
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_USERS:
            return {...state, users: action.users}

        case SET_FRIENDS:
            return {...state, friends: action.friends}

        case FOLLOW:
            return {
                ...state,
				users: updateObjectArray(
					state.users,
					action.userId,
					"id",
					{followed: true}),
                // v чтобы в массив добавить друга в начало - "...state.friends" делаем после
                friends: [state.users.filter(user => {
                    if (user.id === action.userId) {
                        user.followed = true
                        return user
                    }
                })[0], ...state.friends]
                // ^ после фильтрации возвращается массив с одним объектом, поэтому ...[0]
                // меняем поле подписки
            }

        case UNFOLLOW:
            return {
                ...state,
				users: updateObjectArray(
					state.users,
					action.userId,
					"id",
					{followed: false}),
                friends: state.friends.filter(friend => friend.id !== action.userId)
                //TODO если есть 200 друзей и удалять друга №200 через список юзеров - херня, т.к. отображается только 100
            }

        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}

        case SET_TOTAL_COUNT_USERS:
            return {...state, totalUsersCount: action.totalUsersCount}

        case SET_TOTAL_COUNT_FRIENDS:
            return {...state, totalFriendsCount: action.totalFriendsCount}

        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}

        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }

        default:
            return state
    }
};

export default usersReducer;

export const setUsers = (users) => ({type: SET_USERS, users});
export const setFriends = (friends) => ({type: SET_FRIENDS, friends});

export const followUser = (userId) => ({type: FOLLOW, userId});
export const unfollowUser = (userId) => ({type: UNFOLLOW, userId});

export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_COUNT_USERS, totalUsersCount});

export const setTotalFriendsCount = (totalFriendsCount) => ({type: SET_TOTAL_COUNT_FRIENDS, totalFriendsCount});

export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleFollowingProgress = (isFetching, userId) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId
});

export const getUsersThunkCreator = (page, pageSize) => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true))
        dispatch(setCurrentPage(page))
        let data = await usersApi.getUsers(page, pageSize)
        data.items.map(user => {
            if (!user.photos.small) {
                user.photos.small = noAvatar
                user.photos.large = noAvatar
            }
        })
        dispatch(toggleIsFetching(false))
        dispatch(setUsers(data.items))
        dispatch(setTotalUsersCount(data.totalCount))
    }
};
export const getFriendsThunkCreator = () => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true))
        let data = await usersApi.getFriends()
        data.items.map(user => {
            if (!user.photos.small) {
                user.photos.small = noAvatar
                user.photos.large = noAvatar
            }
        })
        dispatch(toggleIsFetching(false))
        dispatch(setFriends(data.items))
        dispatch(setTotalFriendsCount(data.totalCount))
    }
};
const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(toggleFollowingProgress(true, userId))
    let data = await apiMethod(userId)
    if (data.resultCode === 0) dispatch(actionCreator(userId))
    dispatch(toggleFollowingProgress(false, userId))
};
export const followUserThunkCreator = (userId) => {
    return async (dispatch) => {
        await followUnfollowFlow(dispatch, userId, usersApi.followUser.bind(usersApi), followUser)
    }
};
export const unfollowUserThunkCreator = (userId) => {
    return async (dispatch) => {
        await followUnfollowFlow(dispatch, userId, usersApi.unfollowUser.bind(usersApi), unfollowUser)
    }
};

