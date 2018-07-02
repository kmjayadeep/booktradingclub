import { LOGIN_REQUEST, LOGIN_ERROR, LOGIN_SUCCESS, LOGIN_RESET } from "../actionTypes";
const url = "/api/";
import { login } from '../../api/auth';

export function loginUser(credentials) {
  return async dispatch => {
    dispatch(loginRequest());
    try {
      const { user } = await login(credentials)
      dispatch(loginSuccess(user));
    } catch (err) {
      dispatch(loginError(err.message));
      await (new Promise(resolve => setTimeout(resolve, 3000)))
      dispatch(loginReset());
    }
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