import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Row,
  Col,
  Container,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  CardFooter
} from 'reactstrap';

import { loadBooks } from '../../redux/actions/book';

const mapStateToProps = state => {
  return {
    books: state.book.books
  };
};

class Home extends Component {
  componentDidMount() {
    if (this.props.books.length == 0) this.props.loadBooks();
  }
  render() {
    const { books } = this.props;
    return (
      <Container>
        <Row>
        {books.map(book => (
          <Col key={book._id}>
            <Card>
              <CardTitle>{book.title}</CardTitle>
              <CardSubtitle>{book.author}</CardSubtitle>
              <CardBody>
                  <p>{book.owner.name}</p>
                  <p>{book.owner.city}</p>
              </CardBody>
              <CardFooter>
                <Button size="small" color="primary" variant="outlined">
                  Request
                </Button>
                <Button size="small" variant="outlined">
                  View Details
                </Button>
              </CardFooter>
            </Card>
          </Col>
        ))}
        </Row>
      </Container>
    );
  }
}

export default connect(
  mapStateToProps,
  { loadBooks }
)(Home);
