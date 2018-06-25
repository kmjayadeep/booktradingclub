import {
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGIN_ERROR_HIDE,
  LOGOUT
} from "../actionTypes";

const initialState = {
  isAuth: false,
  user: {},
  token: null,
  errorMessage: "",
  isError: false
};
export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuth: true,
        token: action.token,
        user: action.user,
        isError: false
      };
      break;
    case LOGIN_ERROR:
      return {
        ...state,
        isError: true,
        errorMessage: action.message
      };
      break;
    case LOGIN_ERROR_HIDE:
      return {
        ...state,
        isError: false
      };
      break;
    case LOGOUT:
      return {
        ...state,
        isAuth: false,
        token: null,
        user: {},
        isError: false
      };
    default:
      return state;
  }
};
