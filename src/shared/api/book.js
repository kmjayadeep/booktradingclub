import request from './request';

export function getBooks() {
  return request.get(`book`);
}
