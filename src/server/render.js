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

export function renderEarlyChunk(req, res, next){
  res.setHeader('Content-Type', 'text/html; charset=UTF-8');
  res.setHeader('Transfer-Encoding', 'chunked');
  res.write(`
    <html>
        <head>
            <title>BookSharingApp</title>
            <link rel="stylesheet" href="/style.css"/>
            <link rel="preload" href="/bundle.js" as="script">
        </head>
        <body>
  `);
  next();
}

export function renderLateChunk(req, res, store){
  const url = req.originalUrl;
  const markup = renderMarkup(url, store);
  const preloadedState = store.getState();
  const serializedState = serialize(preloadedState);
  const lateChunk = `
            <div id="app-root">${markup}</div>
            <script>
              window.__PRELOADED_STATE__ = ${serializedState}
            </script>
            <script src="/bundle.js"></script>
        </body>
    </html>
  `;
  res.write(lateChunk);
  res.end();
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
