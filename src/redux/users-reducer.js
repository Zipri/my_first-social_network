const SET_USERS = 'SET-USERS'
const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'

let initialState = {
	users: [{
		id: 1,
		followed: true,
		firstName: 'Кирилл',
		lastName: 'Сероштан',
		status: 'Future Senior',
		location: {city: 'Москва', country: 'Россия'}
	}, {
		id: 2,
		followed: true,
		firstName: 'Ангелина',
		lastName: 'Тельман',
		status: 'Je suis une sirène',
		location: {city: 'Москва', country: 'Россия'}
	}, {
		id: 3,
		followed: true,
		firstName: 'Матвей',
		lastName: 'Светозаров',
		status: 'Хачу машинку',
		location: {city: 'Москва', country: 'Россия'}
	}, {
		id: 4,
		followed: false,
		firstName: 'John',
		lastName: 'Winchester',
		status: 'Died twice',
		location: {city: 'Kansas', country: 'United States'}
	}, {
		id: 5,
		followed: false,
		firstName: 'Чёрт',
		lastName: 'Паршивый',
		status: 'From tabakerka',
		location: {city: 'Где-то', country: 'Рядом'}
	},{
		id: 6,
		followed: false,
		firstName: 'أنطون',
		lastName: 'السلاف',
		status: 'حمداً لله',
		location: {city: 'إيفانوفو', country: 'سلوفينيا'}
	},{
		id: 7,
		followed: true,
		firstName: '10101',
		lastName: '10000101',
		status: '10111010110',
		location: {city: '01', country: '10'}
	},],
};

const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_USERS:
			return {...state, users: [...state.users, ...action.users]}
		case FOLLOW:
			return {
				...state,
				users: state.users.map(u => {
					if (u.id === action.userId) {return {...u, followed: true}}
					return u
				})
			}
		case UNFOLLOW:
			return {
				...state,
				users: state.users.map(u => {
					if (u.id === action.userId) {return {...u, followed: false}}
					return u
				})
			}
		default:
			return state
	}
};

export default usersReducer;

export const setUsersAC = (users) => ({type: SET_USERS, users: users});
export const followAC = (userId) => ({type: FOLLOW, userId: userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId: userId});