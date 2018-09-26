import React from 'react'
import './App.css'

import { Route } from 'react-router-dom'


import MainPage from './components/pages/MainPage';
import SearchPage from './components/pages/SearchPage';
import BookPage from './components/pages/BookPage';

class BooksApp extends React.Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={ MainPage } />
        <Route exact path="/search" component={ SearchPage } />
        <Route path="/book/:id" component={ BookPage } />
      </div>
    );
  }
}

export default BooksApp
