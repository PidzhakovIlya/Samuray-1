import { stopSubmit } from "redux-form";
import { authAPI, securityAPI } from "../API/api";

const SET_USER_DATA = 'SET-USER-DATA';
const GET_CAPTCHA_SUCCASS = 'GET_CAPTCHA_SUCCASS';


let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null,
}

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
        case GET_CAPTCHA_SUCCASS:
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state;
    }
};

export const setAuthUserData = (userId, email, login, isAuth) => ({

    type: SET_USER_DATA,
    payload: { userId, email, login, isAuth }
});

export const getCaptchaUrlSuccass = (captchaUrl) => ({

    type: GET_CAPTCHA_SUCCASS,
    payload: { captchaUrl }
});

export const getAuthUserData = () => async (dispatch) => {
    let response = await authAPI.me();

    if (response.data.resultCode === 0) {
        let { id, email, login } = response.data.data;
        dispatch(setAuthUserData(id, email, login, true));
    }
}



export const getCaptchaUrl = () => async (dispatch) => {
    debugger
    const response = await securityAPI.getCaptchaUrl();
    const captchaUrl = response.data.url;
    dispatch(getCaptchaUrlSuccass(captchaUrl));

};

export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe, captcha);
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData())
    } else {
        if (response.data.resultCode === 10) {
            dispatch(getCaptchaUrl())
        }
        let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Somme error'
        dispatch(stopSubmit('login', { _error: message }));
    }
};

export const logout = () => async (dispatch) => {
    let response = await authAPI.logout();

    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    }
};


export default authReducer;