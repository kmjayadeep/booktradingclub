import React from 'react';
import serialize from 'serialize-javascript';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { SheetsRegistry } from 'react-jss/lib/jss';
import JssProvider from 'react-jss/lib/JssProvider';
import {
  MuiThemeProvider,
  createGenerateClassName
} from '@material-ui/core/styles';

import App from '../shared/App';
import theme from '../shared/theme';

function renderMarkup(url, store, context, sheetsRegistry) {
  const generateClassName = createGenerateClassName();
  const markup = renderToString(
    <Provider store={store}>
      <StaticRouter location={url} context={context}>
        <JssProvider
          registry={sheetsRegistry}
          generateClassName={generateClassName}
        >
          <MuiThemeProvider theme={theme} sheetsManager={new Map()}>
            <App />
          </MuiThemeProvider>
        </JssProvider>
      </StaticRouter>
    </Provider>
  );
  return markup;
}

export function renderFullHtml(url, store) {
  const context = {};
  const sheetsRegistry = new SheetsRegistry();
  const markup = renderMarkup(url, store, context, sheetsRegistry);
  const css = sheetsRegistry.toString();
  const preloadedState = store.getState();
  const serializedState = serialize(preloadedState);
  return `
    <html>
        <head>
            <title>BookSharingApp</title>
            <link rel="stylesheet" href="/css/main.css">
        </head>
        <body>
            <div id="app-root">${markup}</div>
            <style id="jss-server-side">${css}</style>
            <script>
              window.__PRELOADED_STATE__ = ${serializedState}
            </script>
            <script src="/bundle.js"></script>
        </body>
    </html>
  `;
}
