import {
  SET_USER,
  LOGOUT
} from "../actionTypes";

const initialState = {
  isAuth: false,
  user: {},
  token: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        isAuth: true,
        token: action.token,
        user: action.user
      };
      break;
    case LOGOUT:
      return {
        ...state,
        isAuth: false,
        token: null,
        user: {}
      };
    default:
      return state;
  }
};
