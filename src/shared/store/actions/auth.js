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

//TODO
export async function signupUser(state, userData) {
  await signup(userData);
}

export async function logoutUser() {
  await logout();
  return {
    user: null,
    isAuth: false
  }
}

export default store => ({
  loginUser,
  logoutUser,
  signupUser
})