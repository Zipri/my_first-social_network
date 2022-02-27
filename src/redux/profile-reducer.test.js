import { render, screen } from '@testing-library/react';
import profileReducer, {addPost, deletePost} from "./profile-reducer";

let state = {
    posts: [
        {id: 1, postMessage: 'Hello world', likes: 4},
        {id: 2, postMessage: '何かのいくつかの種類の性交の説明', likes: 300},
        {id: 3, postMessage: 'Ебиссь оно конём', likes: 76},
        {id: 4, postMessage: '.أنا أكره هذه العبارةა', likes: 13},
        {
            id: 6,
            postMessage: 'Она несла в руках отвратительные, тревожные желтые цветы. Черт их знает, как их зовут, но они первые почему-то появляются в Москве.',
            likes: 666
        },
        {
            id: 7,
            postMessage: 'Вы помните,\n' +
                'Вы всё, конечно, помните,\n' +
                'Как я стоял,\n' +
                'Приблизившись к стене,\n' +
                'Взволнованно ходили вы по комнате\n' +
                'И что-то резкое\n' +
                'В лицо бросали мне.',
            likes: 228
        },
    ]
}

test("the length of posts should increase", () => {
    // 1. test data
    let action = addPost("IT-KAMASUTRA.com")
    // 2. action
    let newState = profileReducer(state, action)
    // 3. expectation
    expect(newState.posts.length).toBe(7)
});

test("the message of new post should be correct", () => {
    // 1. test data
    let action = addPost("IT-KAMASUTRA.com")
    // 2. action
    let newState = profileReducer(state, action)
    // 3. expectation
    expect(newState.posts[6].postMessage).toBe("IT-KAMASUTRA.com")
});

test("the length of posts should decrement", () => {
    // 1. test data
    let action = deletePost(1)
    // 2. action
    let newState = profileReducer(state, action)
    // 3. expectation
    expect(newState.posts.length).toBe(5)
});

test("the length of posts should not decrement", () => {
    // 1. test data
    let action = deletePost(1000)
    // 2. action
    let newState = profileReducer(state, action)
    // 3. expectation
    expect(newState.posts.length).toBe(6)
});