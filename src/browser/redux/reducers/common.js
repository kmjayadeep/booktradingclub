import { SHOW_SPINNER, HIDE_SPINNER } from '../actionTypes';

const defaultState = {
  showSpinner: false
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case SHOW_SPINNER:
      return {
        ...state,
        showSpinner: true
      };
    case HIDE_SPINNER:
      return {
        ...state,
        showSpinner: false
      };
    default:
      return state;
  }
};
