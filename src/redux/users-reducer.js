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
	users: [
		/*{
		id: 1,
		followed: true,
		firstName: 'Кирилл',
		lastName: 'Сероштан',
		status: 'Future Senior',
		location: {city: 'Москва', country: 'Россия'}
	}, {
		id: 2,
		followed: true,
		firstName: 'Ангелина',
		lastName: 'Тельман',
		status: 'Je suis une sirène',
		location: {city: 'Москва', country: 'Россия'}
	}, {
		id: 3,
		followed: true,
		firstName: 'Матвей',
		lastName: 'Светозаров',
		status: 'Хачу машинку',
		location: {city: 'Москва', country: 'Россия'}
	}, {
		id: 4,
		followed: false,
		firstName: 'John',
		lastName: 'Winchester',
		status: 'Died twice',
		location: {city: 'Kansas', country: 'United States'}
	}, {
		id: 5,
		followed: false,
		firstName: 'Чёрт',
		lastName: 'Паршивый',
		status: 'From tabakerka',
		location: {city: 'Где-то', country: 'Рядом'}
	},{
		id: 6,
		followed: false,
		firstName: 'أنطون',
		lastName: 'السلاف',
		status: 'حمداً لله',
		location: {city: 'إيفانوفو', country: 'سلوفينيا'}
	},{
		id: 7,
		followed: true,
		firstName: '10101',
		lastName: '10000101',
		status: '10111010110',
		location: {city: '01', country: '10'}
	},*/],
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

export const getUsersThunkCreator = (currentPage, pageSize) => {
	return (dispatch) => {
		dispatch(toggleIsFetching(true))
		usersApi.getUsers(currentPage, pageSize).then(data => {
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
			debugger
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
