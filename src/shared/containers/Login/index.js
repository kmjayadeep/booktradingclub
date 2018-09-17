import {h, Component } from 'preact';

import { loginUser } from '../../redux/actions/auth';

import styles from  "./Login.css";

class Login extends Component {

  state = {
    loginError: null,
    loading: false
  };

  setLoading = loading => {
    this.setState({ loading })
  }

  handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    const credentials = { email, password };
    this.setLoading(true);
    try {
      await loginUser(credentials);
    } catch (err) {
      this.setState({
        loginError: err.message
      });
    }
    this.setLoading(false);
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render({isAuth},{loginError}) {
    return (
      <div class="container">
        <div class="card" id={styles.auth_card}>
          <img class="card-img-top" src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"/>
          <div class="card-body">
            <h5 class="card-title">Login</h5>
            <div class="card-subtitle">To access thousands of books around you</div>
            <form id={styles.auth_form}>
               <WarningMessage message={loginError} />
               <div class="form-group">
               <input class="form-control" type="email" name="email"  placeholder="Email Address" required onChange={this.handleChange} />
                 <input class="form-control" type="password" name="password" id="inputPassword" placeholder="Password" required onChange={this.handleChange} />
               </div>
               <button class="btn btn-primary btn-block" onClick={this.handleLogin}>Sign In</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;

const WarningMessage = ({ message }) => (
  message && 
  <Alert color="warning">
    {message}
  </Alert>
);