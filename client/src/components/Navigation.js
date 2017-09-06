import React, { Component } from 'react';
import logo from '../images/orangelogo.svg';
import { Link } from 'react-router-dom';
import Auth from '../modules/Auth';
import menu from '../images/hamburger.png';

class Navigation extends Component {

  render() {
    return (
        <div className="nav">
            <div className="top-nav">
                <Link to="/" className="logo-banner nav-link">
                    <img className="logo" src={logo} alt="Ramen Adventures logo"/>
                    <div className="banner">
                        <p className="banner-text">RAMEN ADVENTURES</p>
                    </div>
                </Link>
                <div className="top-elements">
                    <div className="top-nav">
                        {(Auth.isUserAuthenticated() && Auth.isTokenDefined()) ? (
                            <Link to="/" className="nav-link">
                                <div className="top-links" onClick={this.props.logOut}>
                                    Log Out
                                </div>
                            </Link>
                        ) : (
                            <Link to="/signin" className="nav-link">
                                <div className="signup top-links" onClick={this.props.resetRedirect}>
                                    Log In/Sign Up
                                </div>
                            </Link>
                        )}
                        <Link to="/about" className="nav-link">
                            <div className="contact top-links">
                                Contact
                            </div>
                        </Link>
                    </div>
                    <form onSubmit={(e) => this.props.search(e)}>
                        <input  type="text"
                                placeholder="Search"
                                onChange={this.props.handleSearchChange}
                                className="search"
                                value={this.props.searchQuery}
                        />
                    </form>
                </div>
            {/* <img className="menu-icon" src={menu} alt="mobile menu" /> */}
            <i className="fa fa-bars fa-2x" aria-hidden="true"></i>
            </div>
            <div className="mobile-search">
                    <form onSubmit={(e) => this.props.search(e)}>
                            <input  type="text"
                                    placeholder="Search"
                                    onChange={this.props.handleSearchChange}
                                    className="search"
                                    value={this.props.searchQuery}
                            />
                    </form>
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
