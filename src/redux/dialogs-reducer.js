const SEND_MESSAGE = 'dialogs/SEND-MESSAGE'

let initialState = {
	dialogs: [
		{id: 1, name: 'Антон'},
		{id: 2, name: 'Настя (лисёнок)'},
		{id: 3, name: 'Кот'},
		{id: 4, name: 'Кирилл'},
		{id: 5, name: 'Яша'},
		{id: 6, name: 'Ъуъ'},
	],
	messages: [
		{id: 1, message: 'А здесь могли бы быть сообщения'},
		{id: 2, message: 'Работающий чатик для пользователей сети'},
		{id: 3, message: 'Но, к сожалению, на сообщения апишки тоже нет'},
		{id: 4, message: 'Поэтому и здесь стоит просто заглушка'},
		{id: 5, message: 'И всё равно оргомная благодарочка Димычу за API'},
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