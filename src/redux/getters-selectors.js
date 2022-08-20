import {createSelector} from "reselect";

//App
export const getInitialized = (state) => state.app.initialized

//Profile
export const getProfile = (state) => state.profilePage.profile;
export const getStatus = (state) => state.profilePage.status;
export const getFollowed = (state) => state.profilePage.followed;
export const getPosts = (state) => state.profilePage.posts;

//Dialogs
export const getDialogs = (state) => state.dialogsPage.dialogs;

//Messages
export const getMessages = (state) => state.dialogsPage.messages;

//Users
const simpleUsersSelector = (state) => state.usersPage.users;
export const getUsers = createSelector(simpleUsersSelector, (users) => users);
export const getPageSize = (state) => state.usersPage.pageSize;
export const getFriends = (state) => state.usersPage.friends;
export const getTotalUsersCount = (state) => state.usersPage.totalUsersCount;
export const getCurrentPage = (state) => state.usersPage.currentPage;
export const getTotalFriendsCount = (state) => state.usersPage.totalFriendsCount;
export const getCurrentFriendPage = (state) => state.usersPage.currentFriendPage;
export const getIsFetching = (state) => state.usersPage.isFetching;
export const getFollowingInProgress = (state) => state.usersPage.followingInProgress;

//Auth
export const getIsAuth = (state) => state.auth.isAuth;
export const getAuthUserId = (state) => state.auth.userId;
export const getLogin = (state) => state.auth.login;