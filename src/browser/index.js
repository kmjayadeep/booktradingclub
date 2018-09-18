import { h, render } from 'preact'
import { Provider } from 'unistore/preact'
import Router from '../shared/router'
import { configureStore } from '../shared/store/store';

const store = configureStore(window.__PRELOADED_STATE__);

store.subscribe(console.log);

const app = document.getElementById('app-root')

render(
    <Provider store={store}>
        <Router />,
    </Provider>,
    app,
    app.lastChild
)