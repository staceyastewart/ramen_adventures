import React, { Component } from 'react';

class Navigation extends Component {


  render() {
    return (
        <div className="nav">
            <div className="top-nav">
                <div className="logo">
                </div>
                <div className="top-elements">
                        <div className="top-links">
                        <div className="account links">
                            My Account
                        </div>
                        <div className="signup links">
                            Sign Up
                        </div>
                        <div className="contact links">
                            Contact
                        </div>
                    </div>
                    <div className="search">
                    </div>
                </div>
                
            </div>
            <div className="bottom-nav">
                <div className="home links">
                    Home
                </div>
                <div className="about links">
                    About
                </div>
                <div className="books links">
                    Books
                </div>
                <div className="blog links">
                    Ramen Blog
                </div>
                <div className="schools links">
                    Ramen Schools
                </div>
                <div className="tours links">
                    Ramen Tours
                </div>
                <div className="media links">
                    Media
                </div>
            </div>
            
        </div>
    )
  }
}

export default Navigation;
