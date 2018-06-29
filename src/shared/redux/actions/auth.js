import {LOGIN_REQUEST, LOGIN_ERROR, LOGIN_SUCCESS, LOGIN_RESET } from "../actionTypes";
const url = "/api/";
import { login } from '../../api/auth';

export function loginUser(credentials) {
  return dispatch => {
    dispatch(loginRequest());
    login(credentials)
      .then(({ user }) => {
        console.log('here too')
        dispatch(loginSuccess(user));
      })
      .catch(err => {
        console.log('here err')
        dispatch(loginError(err.message));
        setTimeout(() => {
          //to hide error message after 3s
          dispatch(loginReset());
        }, 3000);
      });
  }
}

export function loginRequest() {
  return {
    type: LOGIN_REQUEST
  };
}

export function loginSuccess(user) {
  return {
    type: LOGIN_SUCCESS,
    user
  };
}

export function loginError(message) {
  return {
    type: LOGIN_ERROR,
    message
  }
}

export function loginReset() {
  return {
    type: LOGIN_RESET
  }
}