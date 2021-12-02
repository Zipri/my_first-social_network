const SEND_MESSAGE = 'SEND-MESSAGE'

let initialState = {
	dialogs: [
		{id: 1, name: 'Антон'},
		{id: 2, name: 'Ангелина'},
		{id: 3, name: 'Кот'},
		{id: 4, name: 'Кирилл'},
		{id: 5, name: 'Яша'},
		{id: 6, name: 'Ъуъ'},
	],
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

		case SEND_MESSAGE:
			return {
				...state,
				messages: [...state.messages, {id: 7, message: action.newMessageBody}]
			}

		default:
			return state
	}
};

export default dialogsReducer;

export const sendMessage = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody});