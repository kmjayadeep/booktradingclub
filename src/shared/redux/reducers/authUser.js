import { LOGIN, LOGOUT } from "../actionTypes";

const initialState = {
  isAuth: false,
  user: {}
};
export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isAuth: true,
        user: action.user
      };
      break;
    case LOGOUT:
      return {
        ...state,
        isAuth: false,
        user: {}
      };
    default:
      return state;
  }
};
