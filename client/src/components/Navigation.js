import React, { Component } from 'react';
import logo from '../images/orangelogo.svg';
import axios from 'axios';
import { Link } from 'react-router-dom';

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
                <Link to="/" className="logo-banner nav-link">
                    <img className="logo" src={logo} alt="Ramen Adventures logo"/>
                    <div className="banner">
                        <p>RAMEN ADVENTURES</p>
                    </div>
                </Link>
                <div className="top-elements">
                    <div className="top-nav">
                        <div className="top-links" onClick={this.props.logOut}>
                          Log Out
                        </div>
                        <Link to="/signin" className="nav-link">
                            <div className="signup top-links">
                                Log In/Sign Up
                            </div>
                        </Link>
                        <Link to="/about" className="nav-link">
                            <div className="contact top-links">
                                Contact
                            </div>
                        </Link>
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
                <Link to="/blog" className="nav-link">
                    <div className="blog bottom-links">
                        Ramen Blog
                    </div>
                </Link>
                <Link to="/store" className="nav-link">
                    <div className="books bottom-links">
                        Store [Books & Tshirts]
                    </div>
                </Link>
                <Link to="/tours" className="nav-link">
                    <div className="tours bottom-links">
                        Ramen Tours
                    </div>
                </Link>
                <Link to="/schools" className="nav-link">
                    <div className="schools bottom-links">
                        Ramen Schools
                    </div>
                </Link>
                <Link to="/media" className="nav-link">
                    <div className="media bottom-links">
                        Media
                    </div>
                </Link>
                <Link to='/about' className="nav-link">
                    <div className="about bottom-links">
                        About Me
                    </div>
                </Link>
            </div>
        </div>
    )
  }
}

export default Navigation;
