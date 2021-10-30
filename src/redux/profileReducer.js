const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST = 'UPDATE-NEW-POST'

const profileReducer = (state, action) => {

	switch (action.type) {

		case ADD_POST:
			let newPost = {
				id: 6,
				message: state.newPostText,
				likes: 1337
			}
			state.posts.push(newPost)
			state.newPostText = ''
			return state

		case UPDATE_NEW_POST:
			state.newPostText = action.newPText
			return state

		default:
			return state

	}
}

export default profileReducer

export const addPostActionCreator = () => ({
	type: ADD_POST
})
export const updateNewPostTextActionCreator = (text) => ({
	type: UPDATE_NEW_POST,
	newPText: text
})