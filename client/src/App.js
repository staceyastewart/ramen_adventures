import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RegisterForm from './components/RegisterForm';
import ShopPostForm from './components/ShopPostForm';
import Navigation from './components/Navigation';
import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Home />
      </div>
    );
  }
}

export default App;
