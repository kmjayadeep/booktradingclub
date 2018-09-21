import { h, Component } from 'preact';
import { connect } from 'unistore/preact';
import { route } from 'preact-router';
import Redirect from '../../components/Redirect';
import actions from '../../store/actions/auth';

import styles from './Logout.css';

class Logout extends Component {
  componentDidMount() {
    this.props.logoutUser();
  }
  render({ isAuth }) {
    if(isAuth)
      return <Redirect to="/" />
    return (
      <div class={`container ${styles.pad_top}`}>
        <div class="row">
          <div class="col text-center">
            <h3>Logging out</h3>
            <div class="mb-4 lead">Please Wait..</div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect('isAuth', actions)(Logout);