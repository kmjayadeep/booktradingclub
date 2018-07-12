import React, { Component } from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';

import { loadBooks } from '../../redux/actions/book';

const mapStateToProps = state => {
  return {
    books: state.book.books
  };
};

const styles = {
  books: {
    marginTop: 10,
    marginBottom: 20
  }
};

class Books extends Component {
  componentDidMount() {
    if (this.props.books.length == 0) this.props.loadBooks();
  }
  render() {
    const { classes, books } = this.props;
    return (
      <Grid container spacing={24} className={classes.books}>
        {books.map(book => (
          <Grid key={book._id} item xs={12} sm={6} md={4} xl={3}>
            <Card>
              <CardHeader title={book.title} subheader={book.author} />
              <CardContent>
                <Grid container>
                  <Icon color="primary">person</Icon>
                  <Typography variant="subheading">{book.owner.name}</Typography>
                </Grid>
                <Grid container>
                  <Icon color="secondary">location_on</Icon>
                  <Typography variant="body2">{book.owner.city}</Typography>
                </Grid>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary" variant="outlined">
                  Request
                </Button>
                <Button size="small" variant="outlined">
                  View Details
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    );
  }
}

const ConnectedComponent = connect(
  mapStateToProps,
  { loadBooks }
)(Books);
export default withStyles(styles)(ConnectedComponent);
