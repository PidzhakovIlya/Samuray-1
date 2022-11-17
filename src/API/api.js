import * as axios from "axios";
// import { login } from "../redux/auth-Reducer";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'a3ce64a6-135f-4c65-8c37-07e6d553c2c5'
    },
})

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },

    deleteUser(id) {
        return instance.delete(`follow/${id}`)
    },

    postUser(id) {
        return instance.post(`follow/${id}`)
    },
    getProfile(userId) {
        return ProfileAPI.getProfile(userId);
    },

}
export const ProfileAPI = {

    getProfile(userId) {
        return instance.get('profile/' + userId);
    },
    getStatus(userId) {
        return instance.get('profile/status/' + userId);
    },
    updateStatus(status) {
        return instance.put('profile/status/', { status: status });
    },
    savePhoto(photoFile) {
        const formData = new FormData();
        formData.append('image', photoFile)
        return instance.put('profile/photo/', formData, {
            headers: {
                'Content-type': 'multipart/form-data'
            }
        });
    },
    saveProfile(profile) {
        return instance.put('profile', profile);
    },
};

export const authAPI = {
    me() {
        return instance.get('auth/me');
    },
    login(email, password, rememberMe = false, captcha = null,) {
        return instance.post("auth/login", { email, password, rememberMe, captcha });
    },
    logout() {
        return instance.delete("auth/login");
    }
};

export const securityAPI = {  
    getCaptchaUrl() {
        debugger
        return instance.get('security/get-captcha-url');
    }
};