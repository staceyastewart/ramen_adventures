import React, { Component } from 'react';
import logo from '../images/favicon.ico';
import { Link, withRouter } from 'react-router-dom';
import Auth from '../modules/Auth';
import SchoolDropDown from './SchoolDropDown';

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
                        <Link to="/tokyo-school" className="nav-link">
                            <li className="mobile-menu-item" onClick={this.handleReturnClick}>Tokyo Ramen School</li>
                        </Link>
                        <hr className="hr-mobile" />
                        <Link to="/osaka-school" className="nav-link">
                            <li className="mobile-menu-item" onClick={this.handleReturnClick}>Osaka Ramen School</li>
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
        <header className="nav">
            <div className="top-nav">
                <Link to="/" className="logo-banner">
                    <img className="logo" src={logo} alt="Ramen Adventures logo"/>
                    <div className="banner">
                        <p>RAMEN ADVENTURES</p>
                    </div>
                </Link>
                <div className="top-elements">
                    <div className="right-nav">
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
                                    value={this.props.searchQuery}
                            />
                    </form>
                </div>
            <hr className="hr-nav"/>
            <div className="bottom-nav">
                <Link to="/blog">
                    <div className="blog bottom-links">
                        Ramen Blog
                    </div>
                </Link>
                <Link to="/best-of">
                    <div className="bottom-links">
                        Best of the Best
                    </div>
                </Link>
                <Link to="/store">
                    <div className="books bottom-links">
                        Store [Books & Tshirts]
                    </div>
                </Link>
                <Link to="/tours">
                    <div className="tours bottom-links">
                        Ramen Tours
                    </div>
                </Link>
                <div className="schools-dropdown-wrapper">
                    <div className="schools bottom-links">
                        Schools
                    </div>
                    <SchoolDropDown />
                </div>
                <Link to='/map'>
                    <div className="about bottom-links">
                        Ramen Map
                    </div>
                </Link>
                <Link to="/media">
                    <div className="media bottom-links">
                        Media
                    </div>
                </Link>
                <Link to='/about'>
                    <div className="about bottom-links">
                        About Me
                    </div>
                </Link>
            </div>
        </header>
    )
  }
}

export default withRouter(Navigation);
