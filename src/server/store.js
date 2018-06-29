import { applyMiddleware, createStore } from "redux";
import reducer from '../shared/redux/reducer';
import thunk from "redux-thunk";
import logger from 'redux-logger';

export const configureStore = preloadedState => {
    return createStore(reducer, preloadedState, applyMiddleware(thunk, logger));
}