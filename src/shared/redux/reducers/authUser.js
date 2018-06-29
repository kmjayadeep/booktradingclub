import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGIN_RESET
} from "../actionTypes";

const initialState = {
  isLoading: false,
  isAuth: false,
  user: null,
  loginError: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      {
        return {
          ...state,
          isLoading: true,
          loginError: null
        }
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isAuth: true,
        user: action.user,
        loginError: null
      };
      break;
    case LOGIN_ERROR:
      return {
        ...state,
        isLoading: false,
        isAuth: false,
        user: null,
        loginError: action.message
      };
    case LOGIN_RESET:
      return initialState;
    default:
      return state;
  }
};