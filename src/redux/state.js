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
			messages: [
				{id: 1, message: 'first message'},
				{id: 2, message: 'Второе сообщение'},
				{id: 3, message: 'Powel nahoi'},
				{id: 4, message: 'प्रतीक मार्गनिराकरण करू शकत नाही'},
				{id: 5, message: 'مرحبا العالم'},
				{id: 6, message: 'Ъуъ'},
			]
		},
	},

	_callSubscriber () {},

	getState() {
		return this._state
	},

	addPost () {
		let newPost = {
			id: 6,
			message: this._state.profilePage.newPostText,
			likes: 1337
		}
		this._state.profilePage.posts.push(newPost)
		this._state.profilePage.newPostText = ''
		this._callSubscriber(this._state)
	},

	updateNewPostText (newText) {
		this._state.profilePage.newPostText = newText
		this._callSubscriber(this._state)
	},

	subscribe (observer) {
		this._callSubscriber = observer
	}
}

export default Store