import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom'
import shelfs from './shelfs'
import * as BooksAPI from './BooksAPI'

const doc = document;

class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shelf: props.shelf
    };
  }

  addToShelf(book, shelf){
    BooksAPI.update(book, shelf).then((books) => {
      console.log(books);
      this.setState({shelf: shelf});
      this.props.showPopMSG(shelf);
      if(this.props.resetMain) {
        this.props.resetMain();
      }
      if(this.props.refreshResults) {
        this.props.refreshResults(book, shelf);
      }
    });
  }

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
    }
  }

  componentDidMount() {
    // console.log(this);

  }

  render() {
    return (
      <div id={this.props.id} key={this.props.id} className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.props.imgurl})` }}></div>
          <div className="book-shelf-changer">
            <select value={this.props.book.shelf} onChange={(event) => this.addToShelf(this.props.book, event.target.value)}>
              <option value="return" disabled>Move to...</option>
              <option value="none">None</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
            </select>
          </div>
        </div>
        <div className="book-title"><Link to={"/book/" + this.props.book.id}>{this.props.title}</Link></div>
        <div className="book-authors">{this.props.author}</div>
        <div className="book-authors">{this.switchShelfName()}</div>
      </div>
    )
  }
}

export default Book
