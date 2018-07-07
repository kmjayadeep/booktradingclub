import { LOGIN_SUCCESS, LOGIN_RESET } from "../actionTypes";
const url = "/api/";
import { login, logout } from '../../api/auth';

export function loginUser(credentials) {
  return async dispatch => {
    const { user } = await login(credentials)
    dispatch(loginSuccess(user));
  }
}

export function logoutUser() {
  return async dispatch => {
    await logout();
    dispatch(loginReset());
  }
}

export function loginSuccess(user) {
  return {
    type: LOGIN_SUCCESS,
    user
  };
}

export function loginReset() {
  return {
    type: LOGIN_RESET
  }
}