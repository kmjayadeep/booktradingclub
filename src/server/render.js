import React from "react";
import serialize from 'serialize-javascript';
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { SheetsRegistry } from 'react-jss/lib/jss';
import JssProvider from 'react-jss/lib/JssProvider';
import {
  MuiThemeProvider,
  createMuiTheme,
  createGenerateClassName,
} from '@material-ui/core/styles';

import App from "../shared/App";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#26a69a"
    },
    secondary: {
      main: "#ec407a"
    }
  }
});

export function renderMarkup(url, store){
  const context = {};
  const sheetsRegistry = new SheetsRegistry();
  const generateClassName = createGenerateClassName();
  const markup = renderToString(
    <Provider store={store}>
      <StaticRouter location={url} context={context}>
        <JssProvider registry={sheetsRegistry} generateClassName={generateClassName}>
          <MuiThemeProvider theme={theme} sheetsManager={new Map()}>
            <App />
          </MuiThemeProvider>
        </JssProvider>
      </StaticRouter>
    </Provider>
  );
  const css = sheetsRegistry.toString()
  return {markup,css};
}

export function renderHtml(markup, css, preloadedState) {
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