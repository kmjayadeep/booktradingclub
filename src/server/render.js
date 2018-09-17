// import React from 'react';
import serialize from 'serialize-javascript';
// import {renderToString} from 'react-dom/server';
// import {StaticRouter} from 'react-router-dom';
// import {Provider} from 'react-redux';

import { h } from 'preact';
import { render } from 'preact-render-to-string';
import Router from '../shared/router';

// import App from '../shared/App';

function renderMarkup(url, store) {
  let html = render(
    <Router />
  )
  return html;
}

export function renderFullHtml(url, store) {
  const markup = renderMarkup(url, store);
  // const preloadedState = store.getState();
  const preloadedState = {test:'hello'};
  const serializedState = serialize(preloadedState);
  return `
    <html>
        <head>
            <title>BookSharingApp</title>
            <link rel="stylesheet" href="/style.css"/>
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
