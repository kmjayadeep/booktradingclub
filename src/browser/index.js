import { h, render } from 'preact'
import { Provider } from 'unistore/preact'
import App from './App'
import { configureStore } from './store/store';

const store = configureStore({
    auth: {
        loggedIn: true
    },
    activeBooks: {
        data:  []
    }
});

const app = document.getElementById('app-root')

render(
    <Provider store={store}>
        <App />,
    </Provider>,
    app,
    app.lastChild
)