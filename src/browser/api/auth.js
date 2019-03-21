import request from './request';

export function login(credentials) {
  return request.post(`auth/login/basic`, credentials);
}

export function logout() {
  return request.get('auth/logout');
}

export function signup(userData) {
  return request.post('auth/signup', userData);
}
