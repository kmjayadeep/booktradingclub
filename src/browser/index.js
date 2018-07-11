import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { configureStore } from './store';
import Main from './Main';
import theme from '../shared/theme';

const preloadedState = window.__PRELOADED_STATE__;
delete window.__PRELOADED_STATE__;

const store = configureStore(preloadedState);

hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <MuiThemeProvider theme={theme}>
        <Main />
      </MuiThemeProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById('app-root')
);
