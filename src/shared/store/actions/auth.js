import {
  login,
  logout,
  signup
} from '../../api/auth';

export async function loginUser(state, credentials) {
  const {
    user
  } = await login(credentials);
  return {
    user,
    isAuth: true
  }
}

export function signupUser(userData) {
  return async dispatch => {
    await signup(userData);
  };
}

export function logoutUser() {
  return async dispatch => {
    await logout();
    dispatch(loginReset());
  };
}

export default store => ({
  loginUser
})