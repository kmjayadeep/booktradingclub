import { LOGIN_SUCCESS, LOGIN_RESET } from '../actionTypes';

const initialState = {
  isAuth: false,
  user: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isAuth: true,
        user: action.user,
        loginError: null
      };
      break;
    case LOGIN_RESET:
      return initialState;
    default:
      return state;
  }
};
