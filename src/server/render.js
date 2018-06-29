import React from "react";
import serialize from 'serialize-javascript';
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { Provider } from "react-redux";
import App from "../shared/App";

export function renderMarkup(url, store){
  const context = {};
  const markup = renderToString(
    <Provider store={store}>
      <StaticRouter location={url} context={context}>
        <App />
      </StaticRouter>
    </Provider>
  );
  return markup;
}

export function renderHtml(markup, preloadedState) {
  const serializedState = serialize(preloadedState);
  return `
    <html>
        <head>
            <title>BookSharingApp</title>
            <link rel="stylesheet" href="/css/main.css">
        </head>
        <body>
            <div id="app-root">${markup}</div>
            <script>
              window.__PRELOADED_STATE__ = ${serializedState}
            </script>
            <script src="/bundle.js"></script>
        </body>
    </html>
  `;
}