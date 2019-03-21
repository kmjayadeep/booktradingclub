import { h } from 'preact';
import MaterialIcon from '../../components/MaterialIcon';

import './Books.css';

export default ({ book })=> {
    return (
      <div class="col">
        <div class="book-card card text-center">
          <h5 class="card-title">{book.title}</h5>
          <h6 class="card-subtitle mb-2 text-muted">{book.author}</h6>
          <div class="card-body">
            <div class="book-body">
              <div class="owner person">
                <MaterialIcon icon="person" /><p>{book.owner.name}</p>
              </div>
              <div class="owner location">
                <MaterialIcon icon="location_on" /><p>{book.owner.city}</p>
              </div>
            </div>
          </div>
          <div class="card-footer">
            <button class="btn btn-primary">
              Request
            </button>
            <button class="btn">
              View Details
            </button>
          </div>
        </div>
      </div>
    );
  }
