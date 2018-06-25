import axios from "axios";
import { LOAD_BOOKS, VIEW_BOOK, SET_USER, LOGOUT } from "../actionTypes";
const url = "/api/";

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

export function setUser(token, user) {
  localStorage.setItem("token", token);
  localStorage.setItem("user", JSON.stringify(user));
  return {
    type: SET_USER,
    token,
    user
  };
}

export function logout() {
  return {
    type: LOGOUT
  };
}
