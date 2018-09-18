import { h } from 'preact';
import serialize from 'serialize-javascript';
import { Provider } from 'unistore/preact';
import { render } from 'preact-render-to-string';
import Router from '../shared/router';

function renderMarkup(url, store) {
  let html = render(
    <Provider store={store}>
      <Router url={url}/>
    </Provider>
  )
  return html;
}

export function renderFullHtml(url, store) {
  const markup = renderMarkup(url, store);
  const preloadedState = store.getState();
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
