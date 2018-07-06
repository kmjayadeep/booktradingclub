import Home from "./containers/Home";
import Login from "./containers/Login";
import Logout from "./containers/Logout";
import SignUp from "./containers/Signup";
import NotFound from "./containers/NotFound";

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
  path: "/logout",
  component: Logout,
  name: 'logout'
}, {
  path: "/signup",
  component: SignUp,
  name: 'signup'
},{
  component: NotFound,
  name: 'notfound'
}]