import { LOAD_BOOKS } from '../actionTypes';

import { getBooks } from '../../api/book';

export function loadBooks() {
  return async dispatch => {
    const books = await getBooks();
    dispatch({ type: LOAD_BOOKS, books });
  };
}

export function getBook(bookId) {
 //todo
}