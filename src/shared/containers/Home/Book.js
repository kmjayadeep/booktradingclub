import { h } from 'preact';
import styles from "./Books.css";
import MaterialIcon from '../../components/MaterialIcon';

export default ({ book })=> {
    return (
      <div class="col">
        <div class={`${styles.card} card text-center`}>
          <h5 class="card-title">{book.title}</h5>
          <h6 class="card-subtitle mb-2 text-muted">{book.author}</h6>
          <div class="card-body">
            <div class={styles.body}>
              <div class={styles.owner+' '+styles.person}>
                <MaterialIcon icon="person" /><p>{book.owner.name}</p>
              </div>
              <div class={styles.owner+' '+styles.location}>
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
