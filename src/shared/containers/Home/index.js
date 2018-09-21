import { h, Component } from 'preact';
import { connect } from 'unistore/preact';
import actions from '../../store/actions/book';
import Book from './Book';

class Home extends Component {
  componentDidMount() {
    if (this.props.activeBooks.data.length == 0) this.props.loadActiveBooks();
  }
  render({ activeBooks }) {
    return (
      <div class="container">
        <h3 class="text-center">
          Books
          <small class="text-muted"> available for Trade</small>
        </h3>
        <div class="container row">
        {activeBooks.data.map(book => (
          <Book book={book}/>
        ))}
        </div>
      </div>
    );
  }
}

export default connect('activeBooks', actions)(Home);