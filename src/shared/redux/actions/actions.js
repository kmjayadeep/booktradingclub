import axios from "axios";
const url = "api/";

export function loadBooks() {
  return dispatch => {
    axios
      .get(`${url}book`)
      .then(res => {
        let books = res.data;
        dispatch({ type: "LOAD_BOOKS", books });
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
        dispatch({ type: "VIEW_BOOK", book });
      })
      .catch(err => console.log(err));
  };
}

//TODO write reducer
export function loadUsers() {
  return dispatch => {
    axios
      .get(`${url}user`)
      .then(res => {
        let users = res.data;
        dispatch({ type: "LOAD_USERS", users });
      })
      .catch(err => {
        console.log(err);
      });
  };
}

//TODO write reducer and api
export function SignInUser(user_data) {
  return dispatch => {
    axios
      .post(`${url}user`, user_data)
      .then(res => {
        let user = res.data;
        localStorage.setItem("Auth", JSON.stringify(user));
        dispatch({ type: "SET_USER", user });
      })
      .catch(err => console.log(err));
  };
}

export function toggleClose() {
  return dispatch => {
    dispatch({ type: "TOGGLE_MODAL", modalMode: false });
  };
}

export function toggleOpen() {
  return dispatch => {
    dispatch({ type: "TOGGLE_MODAL", modalMode: true });
  };
}
