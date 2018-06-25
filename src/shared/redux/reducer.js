import { combineReducers } from "redux";
import book from "./reducers/book";
import authUser from "./reducers/authUser";
import common from "./reducers/common";
import { routerReducer } from "react-router-redux";

export default combineReducers({
  book,
  authUser,
  common,
  router: routerReducer
});
