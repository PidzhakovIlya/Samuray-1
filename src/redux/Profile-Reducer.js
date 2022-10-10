import { ProfileAPI, usersAPI } from "../API/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';

let initialState = {
    posts: [
        { id: 1, message: 'Hello World', likesCount: 12, },
        { id: 2, message: 'It`s my first post', likesCount: 45, },
        { id: 3, message: 'It`s my first post', likesCount: 65, },
        { id: 4, message: 'It`s my first post', likesCount: 50, },
    ],
    profile: null,
    status: '',
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: action.addMyPost,
                likesCount: 0,
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        default:
            return state;

    }
}

export const addPostActionCreator = (addMyPost) => {
    return {
        type: ADD_POST,
        addMyPost
    }
};

export const setUserProfile = (profile) => {
    return {
        type: SET_USER_PROFILE,
        profile,
    }
};
export const setStatus = (status) => {
    return {
        type: SET_STATUS,
        status,
    }
};
export const getUserProfile = (userId) => {
    return (dispatch) => {
        usersAPI.getProfile(userId).then(response => {

            dispatch(setUserProfile(response.data));
        })
    }
};
export const getStatus = (userId) => {
    return (dispatch) => {
        ProfileAPI.getStatus(userId).then(response => {

            dispatch(setStatus(response.data));
        })
    }
};
export const updateStatus = (status) => {
    return (dispatch) => {
        ProfileAPI.updateStatus(status).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status));
            }
        })
    }
};
export default profileReducer;
