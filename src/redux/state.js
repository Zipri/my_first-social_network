import {rerenderEntireTree} from "../render";

let State = {
	profilePage: {
		newPostText: '',
		posts: [
			{id: 1, message: 'Hello world', likes: 4},
			{id: 2, message: '何かのいくつかの種類の性交の説明', likes: 300},
			{id: 3, message: 'Ебиссь оно конём', likes: 76},
			{id: 3, message: '.أنا أكره هذه العبارةა', likes: 13},
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
}

export let addPost = () => {
	let newPost = {
		id: 5,
		message: State.profilePage.newPostText,
		likes: 1337
	}

	State.profilePage.posts.push(newPost)
	State.profilePage.newPostText = ''
	rerenderEntireTree(State)
}

export let updateNewPostText = (newText) => {

	State.profilePage.newPostText = newText
	rerenderEntireTree(State)
}

export default State