import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from './store';
import App from '../shared/App';

const preloadedState = window.__PRELOADED_STATE__;
delete window.__PRELOADED_STATE__;

const store = configureStore(preloadedState);

hydrate(
  <Provider store={store}>
    <BrowserRouter>
        <App/>
    </BrowserRouter>
  </Provider>,
  document.getElementById('app-root')
);

if(process.env.NODE_ENV == 'development' && module.hot) {
  module.hot.accept('../shared/App', () => {
      const NewApp = require('../shared/App').default;
      hydrate(
        <Provider store={store}>
        <BrowserRouter>
            <NewApp/>
        </BrowserRouter>
      </Provider>,
      document.getElementById('app-root'));
  });
}