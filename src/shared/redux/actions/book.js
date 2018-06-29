import { LOAD_BOOKS, VIEW_BOOK } from '../actionTypes';

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