import React, { Component } from 'react';
import logo from '../images/favicon.ico';
import { Link, withRouter } from 'react-router-dom';
import Auth from '../modules/Auth';

class Navigation extends Component {
    constructor (props) {
        super(props);
        this.state = {
            menuClicked: false
        }
        this.handleMenuClick = this.handleMenuClick.bind(this);
        this.renderMobileMenu = this.renderMobileMenu.bind(this);
        this.handleReturnClick = this.handleReturnClick.bind(this);
    }

    handleMenuClick() {
        this.setState({ menuClicked: true });
    }

    handleReturnClick() {
        this.setState({ menuClicked: false });
    }

    renderMobileMenu() {
        if (this.state.menuClicked) {
            return (
                <div className="mobile-modal">
                    <ul className="mobile-menu">
                        <Link to="/" className="nav-link">
                            <li className="mobile-menu-item" onClick={this.handleReturnClick}>Home</li>
                        </Link>
                        <hr className="hr-mobile" />
                        <Link to="/signin" className="nav-link">
                            <li className="mobile-menu-item" onClick={this.handleReturnClick}>Log In/Sign Up</li>
                        </Link>
                        <hr className="hr-mobile" />
                        <Link to="/blog" className="nav-link">
                            <li className="mobile-menu-item" onClick={this.handleReturnClick}>Ramen Blog</li>
                        </Link>
                        <hr className="hr-mobile"/>
                        <Link to="/store" className="nav-link">
                            <li className="mobile-menu-item" onClick={this.handleReturnClick}>Store</li>
                        </Link>
                        <hr className="hr-mobile"/>
                        <Link to="/tours" className="nav-link">
                            <li className="mobile-menu-item" onClick={this.handleReturnClick}>Ramen Tours</li>
                        </Link>
                        <hr className="hr-mobile"/>
                        <Link to="/schools" className="nav-link">
                            <li className="mobile-menu-item" onClick={this.handleReturnClick}>Ramen Schools</li>
                        </Link>
                        <hr className="hr-mobile"/>
                        <Link to="/media" className="nav-link">
                            <li className="mobile-menu-item" onClick={this.handleReturnClick}>Media</li>
                        </Link>
                        <hr className="hr-mobile"/>
                        <Link to="/about" className="nav-link">
                            <li className="mobile-menu-item" onClick={this.handleReturnClick}>About Me</li>
                        </Link>
                        <hr className="hr-mobile"/>
                        <li className="mobile-menu-item return"
                            onClick={this.handleReturnClick}
                        >
                            Return to site
                            <i className="fa fa-angle-double-right" aria-hidden="true"></i>
                        </li>
                    </ul>
                </div>
            )
        } 
    }

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
                <i className="fa fa-bars fa-2x" aria-hidden="true" onClick={this.handleMenuClick}></i>
                {this.renderMobileMenu()}
            </div>
            <div className="mobile-search">
                    <form onSubmit={(e) => this.props.search(e)}>
                            <input  type="text"
                                    placeholder="Search"
                                    onChange={this.props.handleSearchChange}
                                    className="search"
                            />
                    </form>
                </div>
            <hr className="hr-nav"/>
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

export default withRouter(Navigation);
