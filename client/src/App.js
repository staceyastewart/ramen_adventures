import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Auth from './modules/Auth';
import RegisterForm from './components/RegisterForm';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Footer from './components/Footer';
import SearchResults from './components/SearchResults';
import Store from './components/Store';
import Tours from './components/Tours';
import Schools from './components/Schools';
import Media from './components/Media';
import AboutMe from './components/AboutMe';
import Blog from './components/Blog';

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
      if (jsonRes.token !== undefined) {
        Auth.authenticateUser(jsonRes.token);
      }
      this.setState({
        auth: Auth.isUserAuthenticated()
      });
    }).catch(err => console.log(err));
  }

  loginSubmit = (e) => {
    e.preventDefault();
  
    axios.post('/login', {
        email: e.target.email.value,
        password: e.target.password.value,
      }).then((jsonRes) => {
        console.log(jsonRes);
      if (jsonRes.token === undefined) {
        Auth.authenticateUser(jsonRes.token);
      }
      this.setState({
        auth: Auth.authenticateUser(jsonRes.data.token),
        id: Auth.idUser(jsonRes.data.id)
      });
    }).catch(err => console.log(err));
  }

  logOut = () => {
        axios.delete('/logout', {
          headers: {
            'Content-type': 'application/json',
            'Authorization': `Token token=${Auth.getToken()}`
            }
         })
          .then(jsonRes => {
        console.log(jsonRes);
        Auth.deauthenticateUser();
        this.setState({
            auth: Auth.deauthenticateUser(),
        });
      }).catch(err => console.log(err));
    }


  render() {
    return (
      <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
          <div className="App">
            {/* <Login loginSubmit={this.loginSubmit}/> */}
              <Navigation logOut={this.logOut}/>
              <div>
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/register" component={(props) => <RegisterForm {...props} 
                                          registerSubmit={this.registerSubmit}/>} />
                  <Route path="/search" component={SearchResults} />
                  <Route path="/store" component={Store} />
                  <Route path='/tours' component={Tours} />
                  <Route path='/schools' component={Schools} />
                  <Route path='/media' component={Media} />
                  <Route path='/about' component={AboutMe} />
                  <Route path="/blog" component={Blog} />
                </Switch>
              </div>
              <Footer />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
