import React, { Component } from 'react';
import './App.css';
import RegisterForm from './components/RegisterForm';
import ShopPostForm from './components/ShopPostForm';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Comments from './components/Comments';

import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import promise from 'redux-promise';
const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

class App extends Component {

  registerSubmit = (e) => {
    e.preventDefault();
    axios.post('/users', {
      first_name: e.target.firstName.value,
      last_name: e.target.lastName.value,
      email: e.target.email.value,
      password: e.target.password.value,
      country: e.target.country.value,
      city: e.target.city.value,
      username: e.target.username.value
    }).catch(err => console.log(err));
  }
  render() {
    return (
      <Provider store={createStoreWithMiddleware(reducers)}>
        <div className="App">
          <Navigation />
          <Comments />
          <BrowserRouter>
            <div>
              <Switch>
                <Route path="/register" component={RegisterForm} />
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
