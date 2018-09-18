import { h, Component } from 'preact';
import { connect } from 'unistore/preact';

import actions from '../../store/actions/book';

import styles from "./Books.css";

class Home extends Component {
  componentDidMount() {
    if (this.props.books.length == 0) this.props.loadBooks();
  }
  render({ books }) {
    return (
      <div class="container">
        <h3 class="text-center">
          Books
          <small class="text-muted"> available for Trade</small>
        </h3>
        <div class="container row">
        {books.map(book => (
          <div class="col">
            <div class={styles.book_card+' card text-center'}>
              <div class="card-title">{book.title}</div>
              <div class="card-subtitle">{book.author}</div>
              <div class="card-body">
                  <p><div icon="person"/>{book.owner.name}</p>
                  <p><div icon="location_on"/>{book.owner.city}</p>
              </div>
              <div class="card-footer">
                <button class="btn btn-primary btn-small">
                  Request
                </button>
                <button class="btn">
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
        </div>
      </div>
    );
  }
}

export default connect('books', actions)(Home);