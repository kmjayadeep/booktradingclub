import Home from "./containers/Home";
import Login from "./containers/Login";
import SignUp from "./containers/Signup";

export const routes = [{
  path: "/",
  exact: true,
  component: Home,
  name: 'home'
}, {
  path: "/login",
  component: Login,
  name: 'login'
}, {
  path: "/signup",
  component: SignUp,
  name: 'signup'
}]