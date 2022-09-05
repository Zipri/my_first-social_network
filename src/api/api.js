import axios from "axios";
import {useState} from "react";
import header from "../components/Header/Header";

export const changeAPI = (api) => {config = {
	withCredentials: true,
	baseURL: "https://social-network.samuraijs.com/api/1.0/",
	headers: {
		"API-KEY": api
	}
}};

let config = {
	withCredentials: true,
	baseURL: "https://social-network.samuraijs.com/api/1.0/",
	headers: {
		"API-KEY": "df13e065-b76b-4abe-885d-a3a658f4ab16"
	}
}

const instance = axios.create(config);

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
		return instance.delete(`follow/${userId}`,config)
			.then(response => response.data)
	},
	followUser (userId) {
		return instance.post(`follow/${userId}`, {}, config)
			.then(response => response.data)
	}
};

export const UnFollowUser = {
	//TODO переделай остальных под это
	unfollowUser (userId) {
		return instance.delete(`follow/${userId}`, config)
			.then(response => response.data)
	},
	followUser (userId) {
		return instance.post(`follow/${userId}`, {}, config)
			.then(response => response.data)
	},
	getIsFollowed (userId) {
		return instance.get(`follow/${userId}`)
			.then(response => response.data)
	}
}

export const profileApi = {
	getUserProfile (userId) {
		console.log(config.headers["API-KEY"])
		return instance.get(`profile/${userId}`)
			.then(response => response.data)
	},
	getProfileStatus (userId) {
		return instance.get(`profile/status/${userId}`)
			.then(response => response.data)
	},
	updateProfileStatus (status) {
		return instance.put(`profile/status`, {status: status}, config)
	},
	savePhoto (photoFile) {
		const formData = new FormData()
		formData.append("image", photoFile)
		config.headers['Content-Type'] = 'multipart/form-data'
		return instance.put(`profile/photo`, formData, config)
	},
	saveProfile (profile) {
		return instance.put(`profile`, profile, config)
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