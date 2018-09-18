// index.js
import { h, render } from 'preact'
import { Provider } from 'unistore/preact'
import Router from '../shared/router'

import store from '../shared/store/store';

const app = document.getElementById('app-root')

render(
    <Provider store={store}>
        <Router />,
    </Provider>,
    app,
    app.lastChild
)