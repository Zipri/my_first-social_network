const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST = 'UPDATE-NEW-POST'

let initialState = {
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
};

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST:
			return {
				...state,
				newPostText: '',
				posts: [...state.posts, {id: 6, message: state.newPostText, likes: 1337}]
			}
		case UPDATE_NEW_POST:
			return {
				...state,
				newPostText: action.newPText
			}
		default:
			return state
	}
};

export default profileReducer;

export const addPostActionCreator = () => ({
	type: ADD_POST
});
export const updateNewPostTextActionCreator = (text) => ({
	type: UPDATE_NEW_POST,
	newPText: text
});