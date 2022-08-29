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
	getFriends () {
		return instance.get(`users?friend=${true}&count=100`)
			.then(response => response.data)
		//TODO сделать кнопку "ещё 100" и показывать тогда, когда data.totalCount < 100
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
	},
	savePhoto (photoFile) {
		const formData = new FormData()
		formData.append("image", photoFile)
		return instance.put(`profile/photo`, formData, {
			headers: {'Content-Type': 'multipart/form-data'}
		})
	},
	saveProfile (profile) {
		return instance.put(`profile`, profile)
	},
};

export const authApi = {
	getAuthMe () {
		return instance.get(`auth/me`)
			.then(response => response.data)
	},
	loginMe (email, password, rememberMe = false, captcha = null) {
		return instance.post(`auth/login`, {email, password, rememberMe, captcha})
			.then(response => response.data)
	},
	logoutMe () {
		return instance.delete(`auth/login`)
			.then(response => response.data)
	}
};

export const securityApi = {
	getCaptchaURL () {
		return instance.get(`security/get-captcha-url`)
			.then(response => response.data)
	},
};