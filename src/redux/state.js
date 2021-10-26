const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST = 'UPDATE-NEW-POST'
const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE'

let Store = {
	_state: {
		profilePage: {
			newPostText: '',
			posts: [
				{id: 1, message: 'Hello world', likes: 4},
				{id: 2, message: '何かのいくつかの種類の性交の説明', likes: 300},
				{id: 3, message: 'Ебиссь оно конём', likes: 76},
				{id: 4, message: '.أنا أكره هذه العبارةა', likes: 13},
				{
					id: 6,
					message: 'Она несла в руках отвратительные, тревожные желтые цветы. Черт их знает, как их зовут, но они первые почему-то появляются в Москве.',
					likes: 666
				},
				{
					id: 7,
					message: 'Вы помните,\n' +
						'Вы всё, конечно, помните,\n' +
						'Как я стоял,\n' +
						'Приблизившись к стене,\n' +
						'Взволнованно ходили вы по комнате\n' +
						'И что-то резкое\n' +
						'В лицо бросали мне.',
					likes: 228
				},
			],
		},
		dialogsPage: {
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
		},
	},
	_callSubscriber() {},

	subscribe(observer) {
		this._callSubscriber = observer
	},
	getState() {
		return this._state
	},

	dispatch(action) {
		if (action.type === ADD_POST) {
			this._addPost()
		} else if (action.type === UPDATE_NEW_POST) {
			this._updateNewPostText(action.newPText)
		} else if (action.type === ADD_MESSAGE) {
			this._addMessage()
		} else if (action.type === UPDATE_NEW_MESSAGE) {
			this._updateNewMessageText(action.newMText)
		}
	},

	_addMessage() {
		let newMessage = {
			id: 7,
			message: this._state.dialogsPage.newMessageText,
		}
		this._state.dialogsPage.messages.push(newMessage)
		this._state.dialogsPage.newMessageText = ''
		this._callSubscriber(this._state)
	},
	_updateNewMessageText (newText) {
		this._state.dialogsPage.newMessageText = newText
		this._callSubscriber(this._state)
	},
	_addPost() {
		let newPost = {
			id: 6,
			message: this._state.profilePage.newPostText,
			likes: 1337
		}
		this._state.profilePage.posts.push(newPost)
		this._state.profilePage.newPostText = ''
		this._callSubscriber(this._state)
	},
	_updateNewPostText(newText) {
		this._state.profilePage.newPostText = newText
		this._callSubscriber(this._state)
	},
}

export const addMessageActionCreator = () => ({
	type: ADD_MESSAGE
})
export const updateNewMessageTextActionCreator = (text) => ({
	type: UPDATE_NEW_MESSAGE,
	newMText: text
})
export const addPostActionCreator = () => ({
	type: ADD_POST
})
export const updateNewPostTextActionCreator = (text) => ({
	type: UPDATE_NEW_POST,
	newPText: text
})

export default Store