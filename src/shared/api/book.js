import request from './request';

export function getActiveBooks() {
  return request.get(`book/active`);
}
