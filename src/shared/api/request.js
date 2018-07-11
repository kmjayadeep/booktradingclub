import axios from 'axios';
const baseUrl = '/api/';

const get = url =>
  axios
    .get(baseUrl + url)
    .then(res => res.data)
    .catch(err => {
      throw err.response.data;
    });

const post = (url, data) =>
  axios
    .post(baseUrl + url, data)
    .then(res => res.data)
    .catch(err => {
      throw err.response.data;
    });

export default {
  get,
  post
};
