import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RegisterForm from './components/RegisterForm';
import ShopPostForm from './components/ShopPostForm';
import Navigation from './components/Navigation';
import Home from './components/Home';

import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
// import reducers from './reducers';
import promise from 'redux-promise';
// const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

class App extends Component {
  render() {
    return (
      // <Provider store={createStoreWithMiddleware(reducers)}>
        <div className="App">
          <Navigation />
          <BrowserRouter>
            <div>
              <Switch>
                <Route path="/register" component={RegisterForm} />
                <Route path="/" component={Home} />
              </Switch>
            </div>
          </BrowserRouter>
        </div>
      // </Provider>
    );
  }
}

export default App;
