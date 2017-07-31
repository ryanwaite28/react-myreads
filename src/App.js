import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link, Route } from 'react-router-dom'
import MainPage from './MainPage'
import SearchBooks from './SearchBooks'
import shelfs from './shelfs'
import PopMSG from './PopMSG'

class App extends Component {
  state = {
    
  }

  //

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={({ history }) => (
          <MainPage showPopMSG={this.showPopMSG}/>
        )}/>

        <Route exact path="/search" render={({ history }) => (
          <SearchBooks showPopMSG={this.showPopMSG}/>
        )}/>
      </div>
    )
  }
}

export default App;
