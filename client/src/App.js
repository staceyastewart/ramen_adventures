import React, { Component } from 'react';
import './App.css';
import  './Carousel.css';
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
import BlogPost from './components/BlogPost';
import SignIn from './components/SignIn';
import Unsubscribe from './components/Unsubscribe';

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      auth: Auth.isUserAuthenticated(),
      id: Auth.idUser(),
      email: '',
      redirectToRegister: false,
      isSearching: false,
      isSearchResultClicked: false,
      searchQuery: '',
      searchResultsPosts: [],
      firstPost: [],
      secondPost: [],
      thirdPost: [],
      contentToDisplay: "",
      photoToDisplay: [],
      dateToDisplay: "",
      isOnSearchResult: false
    }

    this.registerSubmit = this.registerSubmit.bind(this);
    this.loginSubmit = this.loginSubmit.bind(this);
    this.logOut = this.logOut.bind(this);
    this.emailSubmit = this.emailSubmit.bind(this);
    this.resetRedirect = this.resetRedirect.bind(this);
    this.getSearchResults = this.getSearchResults.bind(this);
    this.search = this.search.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.resetIsSearching = this.resetIsSearching.bind(this);
    this.getFirstPost = this.getFirstPost.bind(this);
    this.getSecondPost = this.getSecondPost.bind(this);
    this.getThirdPost = this.getThirdPost.bind(this);
    this.handleFirstBlogImageClick = this.handleFirstBlogImageClick.bind(this);
    this.handleSecondBlogImageClick = this.handleSecondBlogImageClick.bind(this);
    this.handleThirdBlogImageClick = this.handleThirdBlogImageClick.bind(this);
    this.handleSearchResultClick = this.handleSearchResultClick.bind(this);
    this.resetSearchResultClicked = this.resetSearchResultClicked.bind(this);
    this.resetIsOnSearchResult = this.resetIsOnSearchResult.bind(this);
    this.handleReturnToSearchClick = this.handleReturnToSearchClick.bind(this);
  }

  registerSubmit(e) {
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

  loginSubmit(e) {
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

  logOut() {
        axios.delete('/logout', {
          headers: {
            'Content-type': 'application/json',
            'Authorization': `Token token=${Auth.getToken()}`
            }
         })
          .then(jsonRes => {
        Auth.deauthenticateUser();
        this.setState({
            auth: Auth.deauthenticateUser(),
        });
      }).catch(err => console.log(err));
    }

  emailSubmit(e) {
    const email = e.target.email.value;
    e.preventDefault();
    this.setState({ email, redirectToRegister: true });
  }

  resetRedirect() {
    this.setState({ redirectToRegister: false });
  }
  
  getSearchResults(query) {
    axios.post(`/search`, { q: query })
    .then((res) => {    
        this.setState({ 
          searchResultsPosts: res.data.posts,
          searchQuery: '',
          query: query
        });     
    });
  }

  search(e) {
    e.preventDefault();
    this.getSearchResults(this.state.searchQuery);
    this.setState({ isSearching: true })
  }

  handleReturnToSearchClick() {
    this.setState({ isSearching: true });
  }

  resetIsSearching() {
    if (this.state.isSearching) { 
    this.setState({ isSearching: false });
    } 
  }

  resetIsOnSearchResult() {
    if (this.state.isOnSearchResult) {
      this.setState({ isOnSearchResult: false });
    }
  }

  handleSearchChange(event) {
      this.setState({ searchQuery: event.target.value })
  }

  handleSearchResultClick(post) {
    this.setState({ 
      isSearchResultClicked: true,
      isOnSearchResult: true,
      contentToDisplay: post.content,
      photoToDisplay: post.photos,
      dateToDisplay: post.date
    });
  }

  resetSearchResultClicked() {
    if (this.state.isSearchResultClicked) {
      this.setState({ isSearchResultClicked: false });
    }
  }

  getFirstPost() {
    axios.get('/posts')
    .then((res) => {
        for (let i = res.data.length-1; i >= res.data.length - 2; i--) {
            this.setState(prevState => ({
                firstPost: [...prevState.firstPost, res.data[i]]
              }));
        }
    });
  }

  getSecondPost() {
    axios.get('/posts')
    .then((res) => {
        for (let i = res.data.length-3; i >= res.data.length - 4; i--) {
            this.setState(prevState => ({
                secondPost: [...prevState.secondPost, res.data[i]]
              }));
        }
    });
  }

  getThirdPost() {
    axios.get('/posts')
    .then((res) => {
        for (let i = res.data.length-5; i >= res.data.length - 6; i--) {
            this.setState(prevState => ({
                thirdPost: [...prevState.thirdPost, res.data[i]]
              }));
        }
    });
  }

  handleFirstBlogImageClick(i) { 
      this.setState({ 
        postToDisplay: this.state.firstPost[i].id,
        contentToDisplay: this.state.firstPost[i].content,
        photoToDisplay: this.state.firstPost[i].photos,
        dateToDisplay: this.state.firstPost[i].date
      });    
  }

  handleSecondBlogImageClick(i) {   
    this.setState({ 
      postToDisplay: this.state.secondPost[i].id,
      contentToDisplay: this.state.secondPost[i].content,
      photoToDisplay: this.state.secondPost[i].photos,
      dateToDisplay: this.state.secondPost[i].date
    });   
  }

  handleThirdBlogImageClick(i) {   
    this.setState({ 
      postToDisplay: this.state.thirdPost[i].id,
      contentToDisplay: this.state.thirdPost[i].content,
      photoToDisplay: this.state.thirdPost[i].photos,
      dateToDisplay: this.state.thirdPost[i].date
    });    
  }

  componentDidMount() {
    this.getFirstPost();
    this.getSecondPost();
    this.getThirdPost();
  }

  render() {
    return (
        <BrowserRouter>
          <div className="App">
              <Navigation logOut={this.logOut}
                          resetRedirect={this.resetRedirect}
                          getSearchResults={this.getSearchResults}
                          search={this.search}
                          handleSearchChange={this.handleSearchChange}
                          searchQuery={this.state.searchQuery}
              />
              <div>
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/register" component={(props) => <RegisterForm {...props} 
                                          registerSubmit={this.registerSubmit}
                                          email={this.state.email}/>} 
                  />
                  <Route path="/search" component={(props) => <SearchResults {...props}
                                        searchResultsPosts={this.state.searchResultsPosts}
                                        query={this.state.query}
                                        resetIsSearching={this.resetIsSearching}
                                        handleSearchResultClick={this.handleSearchResultClick}
                                        resetSearchResultClicked={this.resetSearchResultClicked} />}
                  />
                  <Route path="/store" component={Store} />
                  <Route path='/tours' component={Tours} />
                  <Route path='/schools' component={Schools} />
                  <Route path='/media' component={Media} />
                  <Route path='/about' component={AboutMe} />
                  <Route path="/blog" component={(props) => <Blog {...props}
                                      firstPost={this.state.firstPost}
                                      secondPost={this.state.secondPost}
                                      thirdPost={this.state.thirdPost}
                                      handleFirstBlogImageClick={this.handleFirstBlogImageClick}
                                      handleSecondBlogImageClick={this.handleSecondBlogImageClick}
                                      handleThirdBlogImageClick={this.handleThirdBlogImageClick} />} 
                  />
                  <Route path="/blogpost" component={(props) => <BlogPost {...props}
                                          firstPost={this.state.firstPost}
                                          secondPost={this.state.secondPost}
                                          thirdPost={this.state.thirdPost}
                                          contentToDisplay={this.state.contentToDisplay}
                                          photoToDisplay={this.state.photoToDisplay}
                                          dateToDisplay={this.state.dateToDisplay}
                                          resetIsOnSearchResult={this.resetIsOnSearchResult}
                                          isOnSearchResult={this.state.isOnSearchResult}
                                          handleReturnToSearchClick={this.handleReturnToSearchClick} />}
                  />
                  <Route path="/signin" component={(props) => <SignIn {...props}
                                        loginSubmit={this.loginSubmit}
                                        emailSubmit={this.emailSubmit}
                                        redirectToRegister={this.state.redirectToRegister}
                                        resetRedirect={this.resetRedirect} />} 
                  />
                </Switch>
              </div>
              <Footer />
              {(this.state.isSearching) && <Redirect to="/search" />}
              {(this.state.isSearchResultClicked) && <Redirect to="/blogpost" />}
              <Route path="/unsubscribe" component={Unsubscribe} />
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
