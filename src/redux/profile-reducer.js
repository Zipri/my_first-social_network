import {profileApi, UnFollowUser} from "../api/api";
import {stopSubmit} from "redux-form";

const ADD_POST = 'profile/ADD-POST';
const DELETE_POST = 'profile/DELETE-POST';
const SET_USER_PROFILE = 'profile/SET-USER-PROFILE';
const SET_PROFILE_STATUS = 'profile/SET-PROFILE-STATUS';
const IS_FOLLOWED = 'profile/IS-FOLLOWED';
const SAVE_PHOTO_SUCCESS = 'profile/SAVE-PHOTO-SUCCESS';

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
                posts: [...state.posts, {id: 8, postMessage: action.newPostBody, likes: 1337}]
            }

        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(post => post.id !== action.postId)
            }

        case SET_USER_PROFILE:
            return {...state, profile: action.profile}

        case SET_PROFILE_STATUS:
            return {...state, status: action.status}

        case IS_FOLLOWED:
            return {...state, followed: action.followed}

        case SAVE_PHOTO_SUCCESS:
            return {...state, profile: {...state.profile, photos: action.photos}}

        default:
            return state
    }
};

export default profileReducer;

export const setProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos});
export const addPost = (newPostBody) => ({type: ADD_POST, newPostBody});
export const deletePost = (postId) => ({type: DELETE_POST, postId});
export const setProfileStatus = (status) => ({type: SET_PROFILE_STATUS, status});
export const isFollowed = (followed) => ({type: IS_FOLLOWED, followed})

export const getUserProfileThunkCreator = (userId) => async (dispatch) => {
    let data = await profileApi.getUserProfile(userId)
    dispatch(setProfile(data))
};
export const savePhoto = (file) => async (dispatch) => {
    let response = await profileApi.savePhoto(file)
    if (response.data.resultCode === 0) dispatch(savePhotoSuccess(response.data.data.photos))
};
export const saveProfile = (profile) => async (dispatch, getState) => {
    const userId = getState().auth.userId
    const response = await profileApi.saveProfile(profile)
    if (response.data.resultCode === 0) {
        dispatch(getUserProfileThunkCreator(userId))
    } else {
        dispatch(stopSubmit("profileInfoEditForm", {_error: response.data.messages[0]}))
        return Promise.reject(response.data.messages[0])
    }
};
export const getProfileStatusThunkCreator = (userId) => async (dispatch) => {
    let data = await profileApi.getProfileStatus(userId)
    dispatch(setProfileStatus(data))
};
export const updateProfileStatusThunkCreator = (status) => async (dispatch) => {
    let response = await profileApi.updateProfileStatus(status)
    if (response.data.resultCode === 0) dispatch(setProfileStatus(status))
};
export const isFollowedThunkCreator = (userId) => async (dispatch) => {
    let data = await UnFollowUser.getIsFollowed(userId)
    dispatch(isFollowed(data))
};
