const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE'

export const dialogsReducer = (state, action) => {

	switch (action.type) {

		case ADD_MESSAGE:
			let newMessage = {
				id: 7,
				message: state.newMessageText,
			}
			state.messages.push(newMessage)
			state.newMessageText = ''
			return state

		case UPDATE_NEW_MESSAGE:
			state.newMessageText = action.newMText
			return state

		default:
			return state

	}
}

export default dialogsReducer

export const addMessageActionCreator = () => ({
	type: ADD_MESSAGE
})
export const updateNewMessageTextActionCreator = (text) => ({
	type: UPDATE_NEW_MESSAGE,
	newMText: text
})