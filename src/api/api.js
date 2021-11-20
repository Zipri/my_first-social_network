import axios from "axios";


const instance = axios.create({
	withCredentials: true,
	baseURL: "https://social-network.samuraijs.com/api/1.0/",
	headers: {"API-KEY": "df13e065-b76b-4abe-885d-a3a658f4ab16"}
})

export const usersApi = {
	getUsers (currentPage, pageSize) {
		return instance.get(`users?page=${currentPage}&count=${pageSize}`)
			.then(response => response.data)
	},
	getFriends () {
		return instance.get(`users?friend=${true}&count=100`)
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
}

export const profileApi = {
	getUserProfile (userId) {
		return instance.get(`profile/${userId}`)
			.then(response => response.data)
	}
}