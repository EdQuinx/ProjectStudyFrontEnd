import axios from 'axios';
import * as actionTypes from './actionTypes';
import * as api from '../../api';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
}

export const authSuccess = (token, username) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        token: token,
        username: username
    }
}

export const authFail = error => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    }
}

export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    localStorage.removeItem('expirationDate');
    return {
        type: actionTypes.AUTH_LOGOUT
    };
}

export const checkAuthTimeout = expirationTime => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, expirationTime * 1000)
    }
}

export const authLogin = (username, password) => {
    return dispatch => {
        dispatch(authStart());
        axios.post(api.api_signin, {
            username: username,
            password: password
        })
        .then(res => {
            const token = res.data.key;
            console.log(token)
            const expirationDate = new Date(new Date().getTime() + 3600 * 1000 * 24 * 7);
            localStorage.setItem('token', token);
            localStorage.setItem('username', username);
            localStorage.setItem('expirationDate', expirationDate);
            dispatch(authSuccess(token, username));
            dispatch(checkAuthTimeout(3600 * 24 * 7));
        })
        .catch(function (error) {
            dispatch(authFail(error))
            console.log(error)
        })
    }
}

export const authSignup = (fullname, username, email, password, gender, classs, goodAt=[], badAt=[]) => {
    return dispatch => {
        dispatch(authStart());
        axios.post(api.api_signup, {
            fullname: fullname,
            username: username,
            email: email,
            password: password,
            gender: gender,
            class: classs,
            goodAt: goodAt,
            badAt: badAt,
            isAdmin: false
        })
        .then(res => {
            const token = res.data.key;
            const expirationDate = new Date(new Date().getTime() + 3600 * 1000 * 24 * 7);
            localStorage.setItem('token', token);
            localStorage.setItem('username', username);
            localStorage.setItem('expirationDate', expirationDate);
            dispatch(authSuccess(token, username));
            dispatch(checkAuthTimeout(3600 * 24 * 7));
        })
        .catch(function (error) {
            dispatch(authFail(error))
        })
    }
}

export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        if (token === undefined) {
            dispatch(logout());
        } else {
            const expirationDate = new Date(localStorage.getItem('expirationDate'));
            if ( expirationDate <= new Date() ) {
                dispatch(logout());
            } else {
                const username = localStorage.getItem('username');
                dispatch(authSuccess(token, username));
                dispatch(checkAuthTimeout( (expirationDate.getTime() - new Date().getTime()) / 1000) );
            }
        }
    }
}


export const updateChange = () => {
    return {
        type: actionTypes.UPDATE_CHANGE,
    }
}