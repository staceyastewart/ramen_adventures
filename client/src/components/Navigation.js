import React, { Component } from 'react';
import logo from '../images/orangelogo.svg';
import Auth from '../modules/Auth';
import axios from 'axios';
import { Link } from 'react-router';

class Navigation extends Component {

    constructor(props) {
    super(props);

        this.state = {
            search: ''
        }
    }

    search = (e) => {
        e.preventDefault();
        this.getSearchResults();
    }

    handleSearchChange = (event) => {
        this.setState({ search: event.target.value })
    }

    getSearchResults = () => {
        
        axios.post(`/search`, { q: 'dogen' })
        .then((res) => {
            
        })
    }
    
    componentDidMount = () => {
        this.getSearchResults();
    }

  render() {
    return (
        <div className="nav">
            <div className="top-nav">
                <img className="logo" src={logo} />
                <div className="banner">
                    <p>RAMEN ADVENTURES</p>
                </div>
                <div className="top-elements">
                    <div className="top-nav">
                        <div className="top-links" onClick={this.props.logOut}>
                          Log Out
                        </div>
                        <div className="signup top-links">
                          <a href="/register">Log In/Sign Up</a>
                        </div>
                        <div className="contact top-links">
                            Contact
                        </div>
                    </div>
                    <form onSubmit={(e) => this.search(e)}>
                        <input  type="text"
                                placeholder="Search"
                                onChange={this.handleSearchChange}
                                value={this.state.search}
                                className="search"
                        />
                    </form>
                </div>
            </div>
            <hr />
            <div className="bottom-nav">
                <div className="blog bottom-links">
                    Ramen Blog
                </div>
                <div className="books bottom-links">
                    Store [Books & Tshirts]
                </div>
                <div className="tours bottom-links">
                    Ramen Tours
                </div>
                <div className="schools bottom-links">
                    Ramen Schools
                </div>
                <div className="media bottom-links">
                    Media
                </div>
                <div className="about bottom-links">
                    About Me
                </div>
            </div>

        </div>
    )
  }
}

export default Navigation;
