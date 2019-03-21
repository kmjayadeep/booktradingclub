import { h, Component } from 'preact';
import { Link } from 'preact-router';

import './NotFound.css';
class NotFound extends Component {
  render() {
    return (
      <div class="pad-top container">
          <div class="text-center">
            <span class="display-1 d-block">404</span>
            <div class="mb-4 lead">The page you are looking for was not found.</div>
            <button class="btn btn-primary"><Link href="/">Back to Home</Link></button>
          </div>
      </div>
    );
  }
}

export default NotFound;
