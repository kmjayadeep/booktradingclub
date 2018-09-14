// index.js
import { h, render } from 'preact'
// import { Provider } from 'unistore/preact'
import Router from '../shared/router'

// import createStore from './store/store'

// const store = createStore(window.__STATE__)

const app = document.getElementById('app-root')

render(
    // <Provider store={store}>
        <Router />,
    // </Provider>,
    app,
    app.lastChild
)