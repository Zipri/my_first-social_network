import {profileApi, UnFollowUser} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_PROFILE_STATUS = 'SET-PROFILE-STATUS';
const IS_FOLLOWED = 'IS-FOLLOWED';

let initialState = {
	profile: null,
	status: '',
	followed: null,
	posts: [
		{id: 1, postMessage: 'Hello world', likes: 4},
		{id: 2, postMessage: '何かのいくつかの種類の性交の説明', likes: 300},
		{id: 3, postMessage: 'Ебиссь оно конём', likes: 76},
		{id: 4, postMessage: '.أنا أكره هذه العبارةა', likes: 13},
		{
			id: 6,
			postMessage: 'Она несла в руках отвратительные, тревожные желтые цветы. Черт их знает, как их зовут, но они первые почему-то появляются в Москве.',
			likes: 666
		},
		{
			id: 7,
			postMessage: 'Вы помните,\n' +
				'Вы всё, конечно, помните,\n' +
				'Как я стоял,\n' +
				'Приблизившись к стене,\n' +
				'Взволнованно ходили вы по комнате\n' +
				'И что-то резкое\n' +
				'В лицо бросали мне.',
			likes: 228
		},
	],
};

const profileReducer = (state = initialState, action) => {
	switch (action.type) {

		case ADD_POST:
			return {
				...state,
				posts: [...state.posts, {id: 6, postMessage: action.newPostBody, likes: 1337}]
			}

		case SET_USER_PROFILE:
			return {...state, profile: action.profile}

		case SET_PROFILE_STATUS:
			return {...state, status: action.status}

		case IS_FOLLOWED:
			return {...state, followed: action.followed}

		default:
			return state
	}
};

export default profileReducer;

export const setProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const addPost = (newPostBody) => ({type: ADD_POST, newPostBody});
export const setProfileStatus = (status) => ({type: SET_PROFILE_STATUS, status});
export const isFollowed = (followed) => ({type: IS_FOLLOWED, followed})

export const getUserProfileThunkCreator = (userId) => (dispatch) => {
	profileApi.getUserProfile(userId)
		.then(data => dispatch(setProfile(data)))
};
export const getProfileStatusThunkCreator = (userId) => (dispatch) => {
	profileApi.getProfileStatus(userId)
		.then(data => dispatch(setProfileStatus(data)))
};
export const updateProfileStatusThunkCreator = (status) => (dispatch) => {
	profileApi.updateProfileStatus(status)
		.then(response => {
			if (response.data.resultCode === 0) dispatch(setProfileStatus(status))
		}
	)
};
export const isFollowedThunkCreator = (userId) => (dispatch) => {
	UnFollowUser.getIsFollowed(userId)
		.then(data => dispatch(isFollowed(data)))
};
