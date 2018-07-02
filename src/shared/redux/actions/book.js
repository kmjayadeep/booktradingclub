import { LOAD_BOOKS } from '../actionTypes';

import { getBooks } from '../../api/book';

export function loadBooks() {
  return async dispatch => {
    const books = await getBooks();
    dispatch(setBooks(books));
  };
}

export function setBooks(books) {
  return {
    type: LOAD_BOOKS,
    books
  }
}