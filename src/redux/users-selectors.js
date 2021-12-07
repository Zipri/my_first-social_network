import {createSelector} from "reselect";
//Users
const simpleUsersSelector = (state) => state.usersPage.users
export const getUsers = createSelector(simpleUsersSelector, (users) => users)
export const getPageSize = (state) => state.usersPage.pageSize
export const getFriends = (state) => state.usersPage.friends
export const getTotalUsersCount = (state) => state.usersPage.totalUsersCount
export const getCurrentPage = (state) => state.usersPage.currentPage
export const getIsFetching = (state) => state.usersPage.isFetching
export const getFollowingInProgress = (state) => state.usersPage.followingInProgress

//Auth
export const getIsAuth = (state) => state.auth.isAuth
