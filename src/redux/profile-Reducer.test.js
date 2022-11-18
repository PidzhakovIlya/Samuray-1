
import profileReducer, { addPostActionCreator, deletePost } from "./Profile-Reducer"

let state = {
    posts: [
        { id: 1, message: 'Hello World', likesCount: 12, },
        { id: 2, message: 'It`s my first post', likesCount: 45, },
        { id: 3, message: 'It`s my first post', likesCount: 65, },
        { id: 4, message: 'It`s my first post', likesCount: 50, },
    ],
};

it('length of post should be incremented', () => {
    // 1. test data
    let action = addPostActionCreator('it-kamasutra');
    // 2. action
    let newState = profileReducer(state, action);
    // 3. expectation
    expect(newState.posts.length).toBe(5);
})
it('massage of new post should be correct', () => {
    // 1. test data
    let action = addPostActionCreator('it-kamasutra');
    // 2. action
    let newState = profileReducer(state, action);
    // 3. expectation
    expect(newState.posts[4].message).toBe('it-kamasutra');
})

it('after deleting length post should be decrement', () => {
    // 1. test data
    let action = deletePost(1);
    // 2. action
    let newState = profileReducer(state, action);
    // 3. expectation
    expect(newState.posts.length).toBe(3);
})

it('after deleting length post shouldn`t be  decrement if id is incorrect', () => {
    // 1. test data
    let action = deletePost(1000);
    // 2. action
    let newState = profileReducer(state, action);
    // 3. expectation
    expect(newState.posts.length).toBe(4);
})