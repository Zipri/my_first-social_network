import {usersApi} from "../api/api";

const SET_USERS = 'SET-USERS';
const SET_FRIENDS = 'SET-FRIENDS';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_COUNT_USERS = 'SET-TOTAL-COUNT-USERS';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE-IS-FOLLOWING-PROGRESS';

let initialState = {
	users: [],
	friends: [],
	pageSize: 8,
	totalUsersCount: 0,
	currentPage: 1,
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
				users: state.users.map(u => {
					if (u.id === action.userId) {
						return {...u, followed: true}
					}
					return u
				})
			}

		case UNFOLLOW:
			return {
				...state,
				users: state.users.map(u => {
					if (u.id === action.userId) {
						return {...u, followed: false}
					}
					return u
				})
			}

		case SET_CURRENT_PAGE:
			return {...state, currentPage: action.currentPage}

		case SET_TOTAL_COUNT_USERS:
			return {...state, totalUsersCount: action.totalUsersCount}

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
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleFollowingProgress = (isFetching, userId) => ({
	type: TOGGLE_IS_FOLLOWING_PROGRESS,
	isFetching,
	userId
});

export const getUsersThunkCreator = (page, pageSize) => {
	return (dispatch) => {
		dispatch(toggleIsFetching(true))
		dispatch(setCurrentPage(page))
		usersApi.getUsers(page, pageSize).then(data => {
			dispatch(toggleIsFetching(false))
			dispatch(setUsers(data.items))
			dispatch(setTotalUsersCount(data.totalCount))
		})
	}
};
export const getFriendsThunkCreator = () => {
	return (dispatch) => {
		dispatch(toggleIsFetching(true))
		usersApi.getFriends().then(data => {
			dispatch(toggleIsFetching(false))
			dispatch(setFriends(data.items))
			dispatch(setTotalUsersCount(data.totalCount))
		})
	}
};
export const followUserThunkCreator = (userId) => {
	return (dispatch) => {
		dispatch(toggleFollowingProgress(true, userId))
		usersApi.followUser(userId).then(data => {
			if (data.resultCode === 0) dispatch(followUser(userId))
			dispatch(toggleFollowingProgress(false, userId))
		})
	}
};
export const unfollowUserThunkCreator = (userId) => {
	return (dispatch) => {
		dispatch(toggleFollowingProgress(true, userId))
		usersApi.unfollowUser(userId).then(data => {
			if (data.resultCode === 0) dispatch(unfollowUser(userId))
			dispatch(toggleFollowingProgress(false, userId))
		})
	}
};

