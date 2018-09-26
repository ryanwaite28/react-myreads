import React from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI'
import PopMSG from './PopMSG'

import Book from './Book';

class BookPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      book: null,
      popmsg: '',
      popmsgdisplay: 'none',
      showLoading: 'none'
    }
    this.showPopMSG = this.showPopMSG.bind(this);
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

  showPopMSG(text){
    this.setState({
      popmsg: text,
      popmsgdisplay: 'block'
    }, () => {
      setTimeout(() => {
        this.setState({
          popmsg: '',
          popmsgdisplay: 'none'
        });
      } , 2000);
    })
  }

  render() {
    let { book } = this.state;
    return (
      <div className="list-books">
        <PopMSG display={this.state.popmsgdisplay} text={this.state.popmsg}/>
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">Book</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {
                  this.state.book && <Book showPopMSG={this.showPopMSG} book={book} shelf={book.shelf} key={book.id} id={book.id} imgurl={book.imageLinks.thumbnail} title={book.title} author={book.authors} resetMain={this.resetMain}/>
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
