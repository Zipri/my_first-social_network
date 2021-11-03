const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE'

let initialState = {
	dialogs: [
		{id: 1, name: 'Антон'},
		{id: 2, name: 'Ангелина'},
		{id: 3, name: 'Кот'},
		{id: 4, name: 'Кирилл'},
		{id: 5, name: 'Яша'},
		{id: 6, name: 'Ъуъ'},
	],
	newMessageText: '',
	messages: [
		{id: 1, message: 'first message'},
		{id: 2, message: 'Второе сообщение'},
		{id: 3, message: 'Powel nahoi'},
		{id: 4, message: 'प्रतीक मार्गनिराकरण करू शकत नाही'},
		{id: 5, message: 'مرحبا العالم'},
		{id: 6, message: 'Ъуъ'},
	],
};

export const dialogsReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_MESSAGE:
			return {
				...state,
				newMessageText: '',
				messages: [...state.messages, {id: 7, message: state.newMessageText}]
			}
		case UPDATE_NEW_MESSAGE:
			return {
				...state,
				newMessageText: action.newMText
			}
		default:
			return state
	}
};

export default dialogsReducer;

export const addMessageActionCreator = () => ({
	type: ADD_MESSAGE
});
export const updateNewMessageTextActionCreator = (text) => ({
	type: UPDATE_NEW_MESSAGE,
	newMText: text
});