import { LOAD_BOOKS } from '../actionTypes';

import { getBooks } from '../../api/book';

export function loadBooks() {
  return dispatch => {
    getBooks()
      .then(books => {
        dispatch({ type: LOAD_BOOKS, books });
      })
      .catch(message => {
        console.log(message);
      });
  };
}

export function getBook(bookId) {
 //todo
}