import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Auth from './modules/Auth';
import RegisterForm from './components/RegisterForm';
import ShopPostForm from './components/ShopPostForm';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Comments from './components/Comments';
import Login from './components/Login';

import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import promise from 'redux-promise';
const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

class App extends Component {
  constructor() {
    super();
    this.state = {
      auth: Auth.isUserAuthenticated(),
      formRequested: null,
      id: Auth.idUser()
    }
  }

  registerSubmit = (e) => {
    e.preventDefault();
    axios.post('/users', {
      user: {
        first_name: e.target.firstName.value,
        last_name: e.target.lastName.value,
        email: e.target.email.value,
        password: e.target.password.value,
    }
    }).then(jsonRes => {
      console.log(jsonRes.token);
      if (jsonRes.token !== undefined) {
        Auth.authenticateUser(jsonRes.token);
      }
      this.setState({
        auth: Auth.isUserAuthenticated()
      });
    }).catch(err => console.log(err));
  }

  loginSubmit(e) {
    e.preventDefault();
    axios.post('/login', {
        email: e.target.email.value,
        password: e.target.password.value,
      }).then((jsonRes) => {
        console.log(jsonRes.data)
        console.log(localStorage)
      if (jsonRes.token !== undefined) {
        Auth.authenticateUser(jsonRes.token);
      }
      this.setState({
        auth: Auth.authenticateUser(jsonRes.data.token),
        id: Auth.idUser(jsonRes.data.id)
      });
    }).catch(err => console.log(err));
  }

  render() {
    return (
      <Provider store={createStoreWithMiddleware(reducers)}>
        <div className="App">
          <Login  loginSubmit={this.loginSubmit} />
          <Comments  id={this.state.id}/>
          <Navigation/>
          <BrowserRouter>
            <div>
              <Switch>
                <Route path="/register" component={(props) => <RegisterForm {...props} registerSubmit={this.registerSubmit}/>} />
                <Route path="/" component={Home} />
              </Switch>
            </div>
          </BrowserRouter>
        </div>
      </Provider>
    );
  }
}

export default App;
