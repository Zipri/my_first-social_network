import {profileApi, UnFollowUser} from "../api/api";
import {stopSubmit} from "redux-form";
import {setGlobalError} from "./app-reducer";
import noAvatar from '../assets/noAvatar.png'

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
        {id: 1, postMessage: 'Здесь должны были быть реальные посты реальных людей', likes: 4},
        {id: 2, postMessage: 'И всё время, пока я делал приложение - был уверен, что они будут!', likes: 300},
        {id: 3, postMessage: 'НО! Почти в самом конце я узнал...', likes: 76},
        {id: 4, postMessage: 'Нет апишки на посты...', likes: 13},
        {id: 11, postMessage: 'И всё равно оргомная благодарочка Димычу за API', likes: 13},
        {
            id: 6,
            postMessage: 'Нет апишки - нет постов, нет постов - получаем заглушку... Но ладно, выглядит вполне неплохо же? Если бы ещё работало... Но не от меня же это зависит :)',
            likes: 666
        },
        {
            id: 7,
            postMessage: 'Она несла в руках отвратительные, тревожные желтые цветы. Черт их знает, как их зовут, но они первые почему-то появляются в Москве.',
            likes: 228
        },
    ],
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, {
                    id: 8,
                    postMessage: action.newPostBody,
                    likes: Math.floor(Math.random() * (1000 - 1) + 1)
                }]
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
    if (!data.photos.small) {
        data.photos.small = noAvatar
        data.photos.large = noAvatar
    }
    dispatch(setProfile(data))
};
export const savePhoto = (file) => async (dispatch) => {
    try {
        let response = await profileApi.savePhoto(file)
        if (response.data.resultCode === 0) dispatch(savePhotoSuccess(response.data.data.photos))
    } catch (error) {
        dispatch(setGlobalError(error))
    }
};
export const saveProfile = (profile) => async (dispatch, getState) => {
    try {
        const userId = getState().auth.userId
        const response = await profileApi.saveProfile(profile)
        if (response.data.resultCode === 0) dispatch(getUserProfileThunkCreator(userId))
    } catch (error) {
        dispatch(setGlobalError(error))
    }
};
export const getProfileStatusThunkCreator = (userId) => async (dispatch) => {
    let data = await profileApi.getProfileStatus(userId)
    dispatch(setProfileStatus(data))
};
export const updateProfileStatusThunkCreator = (status) => async (dispatch) => {
    try {
        let response = await profileApi.updateProfileStatus(status)
        if (response.data.resultCode === 0) dispatch(setProfileStatus(status))
    } catch (error) {
        dispatch(setGlobalError(error))
    }
};
export const isFollowedThunkCreator = (userId) => async (dispatch) => {
    let data = await UnFollowUser.getIsFollowed(userId)
    dispatch(isFollowed(data))
};
