import { createStore } from 'redux';
import { loginSuccess } from '../shared/redux/actions/auth';
import { setBooks } from '../shared/redux/actions/book';
import reducer from '../shared/redux/reducer';
import { matchPath } from 'react-router-dom';
import { routes } from '../shared/routes';
import { getAllBooks } from './controllers/BookController';

export const configureStore = async req => {
  const store = createStore(reducer);
  if (req.user) {
    const { name, email } = req.user;
    store.dispatch(loginSuccess({ name, email }));
  }
  let url = req.baseUrl + req.path;
  url = url.replace(/\/$/, '');
  const matchedRoutes = routes.filter(route => {
    return matchPath(url, route);
  });
  for (let route of matchedRoutes) {
    if (route.name == 'home') {
      const books = await getAllBooks();
      store.dispatch(setBooks(books));
    }
  }
  return store;
};
