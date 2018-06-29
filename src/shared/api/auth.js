import request from './request';

export function login(credentials) {
  return request
    .post(`auth/login/basic`, credentials)
}