import axios from "axios";
const url = "/api/";

export function login(credentials) {
  return axios
    .post(`${url}auth/login/basic`, credentials)
    .then(res => res.data)
    .catch(err => {
        throw err.response.data;
    });
}