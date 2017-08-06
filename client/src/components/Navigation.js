import React, { Component } from 'react';

class Navigation extends Component {

    constructor(props) {
    super(props);

        this.state = {
            search: ''
        }
    }

    search = (e) => {
        e.preventDefault();
        //api call to database
        this.setState({ search: '' });
    }

    handleSearchChange = (event) => {
        this.setState({ search: event.target.value })
    }


  render() {
    return (
        <div className="nav">
            <div className="top-nav">
                <div className="logo">
                    ((logo here))
                </div>
                <div className="top-elements">
                        <div className="top-nav">
                        <div className="account top-links">
                            My Account
                        </div>
                        <div className="signup top-links">
                          <a href="register">Sing Up</a>
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
                <div className="home bottom-links">
                    Home
                </div>
                <div className="about bottom-links">
                    About
                </div>
                <div className="books bottom-links">
                    Books
                </div>
                <div className="blog bottom-links">
                    Ramen Blog
                </div>
                <div className="schools bottom-links">
                    Ramen Schools
                </div>
                <div className="tours bottom-links">
                    Ramen Tours
                </div>
                <div className="media bottom-links">
                    Media
                </div>
            </div>

        </div>
    )
  }
}

export default Navigation;
