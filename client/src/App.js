import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RegisterForm from './components/RegisterForm';
import ShopPostForm from './components/ShopPostForm';
import Navigation from './components/Navigation';
import Home from './components/Home';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
            <Navigation />
            <Switch>
              <Route exact path="/" compenent={Home} />
              <Route path="/resister" compenent={RegisterForm} />
            </Switch>
        </div>
        </BrowserRouter>
    );
  }
}

export default App;
