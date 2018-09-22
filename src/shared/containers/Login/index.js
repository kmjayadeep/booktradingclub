import { h, Component } from 'preact';
import { connect } from 'unistore/preact';
import { route } from 'preact-router';
import actions from '../../store/actions/auth';
import Redirect from '../../components/Redirect';

import './Login.css';
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
      await this.props.loginUser(credentials);
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

  render({auth},{loginError}) {
    if(auth.isAuth)
      return <Redirect to="/"/>; //redirect if already logged
    return (
      <div class="container">
        <div class="card" id="auth-card">
          <img class="card-img-top" src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"/>
          <div class="card-body">
            <h5 class="card-title">Login</h5>
            <div class="card-subtitle">To access thousands of books around you</div>
            <form id="auth-form">
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

export default connect('auth', actions)(Login);

const WarningMessage = ({ message }) => (
  message && 
  <div class="alert alert-warning">
    {message}
  </div>
);