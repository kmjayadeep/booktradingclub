import axios from "axios";
import { LOAD_BOOKS, VIEW_BOOK, LOGIN_REQUEST, LOGIN_ERROR, LOGIN_SUCCESS, LOGIN_RESET } from "../actionTypes";
const url = "/api/";
import { login } from '../../api/auth';

export function loadBooks() {
  return dispatch => {
    axios
      .get(`${url}book`)
      .then(res => {
        let books = res.data;
        dispatch({ type: LOAD_BOOKS, books });
      })
      .catch(err => {
        console.log(err);
      });
  };
}

export function getBook(bookId) {
  return dispatch => {
    axios
      .get(`${url}book/${bookId}`)
      .then(res => {
        let book = res.data;
        dispatch({ type: VIEW_BOOK, book });
      })
      .catch(err => console.log(err));
  };
}

export function loginUser(credentials) {
  return dispatch => {
    dispatch(loginRequest());
    login(credentials)
      .then(({ user }) => {
        console.log('here too')
        dispatch(loginSuccess(user));
      })
      .catch(err => {
        console.log('here err')
        dispatch(loginError(err.message));
        setTimeout(() => {
          //to hide error message after 3s
          dispatch(loginReset());
        }, 3000);
      });
  }
}

export function loginRequest() {
  return {
    type: LOGIN_REQUEST
  };
}

export function loginSuccess(user) {
  return {
    type: LOGIN_SUCCESS,
    user
  };
}

export function loginError(message) {
  return {
    type: LOGIN_ERROR,
    message
  }
}

export function loginReset() {
  return {
    type: LOGIN_RESET
  }
}