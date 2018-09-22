import { h, render } from 'preact'
import { Provider } from 'unistore/preact'
import App from '../shared/App'
import { configureStore } from '../shared/store/store';

const store = configureStore(window.__PRELOADED_STATE__);

const app = document.getElementById('app-root')

render(
    <Provider store={store}>
        <App />,
    </Provider>,
    app,
    app.lastChild
)