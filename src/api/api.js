import axios from "axios";


const instance = axios.create({
	withCredentials: true,
	baseURL: "https://social-network.samuraijs.com/api/1.0/",
	headers: {"API-KEY": "df13e065-b76b-4abe-885d-a3a658f4ab16"}
});

export const usersApi = {
	getUsers (currentPage, pageSize) {
		return instance.get(`users?page=${currentPage}&count=${pageSize}`)
			.then(response => response.data)
	},
	getFriends (currentPage, pageSize) {
		return instance.get(`users?friend=${true}&page=${currentPage}&count=${pageSize}`)
			//TODO если больше 100 френдов - не все отобразятся
			.then(response => response.data)
	},
	unfollowUser (userId) {
		return instance.delete(`follow/${userId}`)
			.then(response => response.data)
	},
	followUser (userId) {
		return instance.post(`follow/${userId}`)
			.then(response => response.data)
	}
};

export const UnFollowUser = {
	//TODO переделай остальных под это
	unfollowUser (userId) {
		return instance.delete(`follow/${userId}`)
			.then(response => response.data)
	},
	followUser (userId) {
		return instance.post(`follow/${userId}`)
			.then(response => response.data)
	},
	getIsFollowed (userId) {
		return instance.get(`follow/${userId}`)
			.then(response => response.data)
	}
}

export const profileApi = {
	getUserProfile (userId) {
		return instance.get(`profile/${userId}`)
			.then(response => response.data)
	},
	getProfileStatus (userId) {
		return instance.get(`profile/status/${userId}`)
			.then(response => response.data)
	},
	updateProfileStatus (status) {
		return instance.put(`profile/status`, {status: status})
	}
};

export const authApi = {
	getAuthMe () {
		return instance.get(`auth/me`)
			.then(response => response.data)
	},
	loginMe (email, password, rememberMe = false) {
		return instance.post(`auth/login`, {email, password, rememberMe})
			.then(response => response.data)
	},
	logoutMe () {
		return instance.delete(`auth/login`)
			.then(response => response.data)
	}
};