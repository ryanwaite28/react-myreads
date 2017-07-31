import React, { Component } from 'react';
import './App.css';
import { Link, Route } from 'react-router-dom'
import shelfs from './shelfs'
import * as BooksAPI from './BooksAPI'

class PopMSG extends Component {
  state = {

  }

  componentDidMount(){

  }

  render() {
    return(
      <div id="msg-popup-container" className="transition" style={{display: this.props.display}}>
        <div id="msg-box" className="transition">
          Book Added To: <strong><span id="msg-text">{this.props.text}</span></strong>!
        </div>
      </div>
    )
  }
}

export default PopMSG
