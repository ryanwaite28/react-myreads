import React from 'react';
import { Link } from 'react-router-dom';

import * as BooksAPI from '../BooksAPI';


class Book extends React.Component {
  switchShelfName() {
    switch(this.props.book.shelf) {
      case "currentlyReading":
        return "Currently Reading";
      case "wantToRead":
        return "Want To Read";
      case "read":
        return "Read";
      case "none":
        return "None";
      default:
        return "None";
    }
  }

  render() {
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url("${this.props.book.imageLinks && this.props.book.imageLinks.thumbnail || ""}")` }}></div>
            <div className="book-shelf-changer">
              <select value={this.props.book.shelf || "none"} onChange={(e) => { this.props.updateBook(this.props.book, e.target.value) }}>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title"><Link to={"/book/" + this.props.book.id}>{this.props.book.title}</Link></div>
          <div className="book-authors">{this.props.book.authors && this.props.book.authors[0] || "No Author..."}</div>
          <div className="book-authors">{this.switchShelfName()}</div>
        </div>
      </li>
    );
  }
}



export default Book;
