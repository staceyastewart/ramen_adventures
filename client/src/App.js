import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RegisterForm from './components/RegisterForm';
import ShopPostForm from './components/ShopPostForm';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Comments from './components/Comments';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Comments />
      </div>
    );
  }
}

export default App;
