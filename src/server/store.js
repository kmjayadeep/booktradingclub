import { createStore } from "redux";
import reducer from '../shared/redux/reducer';

export const configureStore = initialState => {
  return createStore(reducer, initialState);
}