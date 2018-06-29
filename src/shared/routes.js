import Home from "./containers/Home";
import Login from "./containers/Login";
import SignUp from "./containers/Signup";

export const routes = [{
  path: "/",
  exact: true,
  component: Home
}, {
  path: "/login",
  component: Login
}, {
  path: "/signup",
  component: SignUp
}]