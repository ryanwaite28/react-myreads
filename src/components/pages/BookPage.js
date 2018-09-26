import React from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from '../../BooksAPI'

import Book from '../Book';

class BookPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      book: null
    }
  }

  componentDidMount() {
    BooksAPI.get(this.props.match.params.id)
    .then(resp => {
      this.setState({ book: resp });
    })
  }

  updateBook = (book, shelf) => {
    BooksAPI.update(book, shelf)
    .then(resp => {
      book.shelf = shelf;
      this.setState({ book });
    });
  }

  switchShelfName() {
    switch(this.state.book.shelf) {
      case "currentlyReading":
        return "Currently Reading";

      case "wantToRead":
        return "Want To Read";

      case "read":
        return "Read";

      case "none":
        return "None";
    }
  }

  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">{this.state.book && this.state.book.title}</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {
                  this.state.book && <Book updateBook={this.updateBook} book={this.state.book} />
                }
              </ol>
            </div>
          </div>
          </div>
        </div>
        <div className="">
          <Link to="/">Home</Link> | <Link to="/search">Search</Link>
        </div>
      </div>
    );
  }
}



export default BookPage;
