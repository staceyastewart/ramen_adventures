import React, { Component } from 'react';

class User extends Component {
    render() {
        return (
            <div className="signin-page-container">
                <div className="signin-container">
                    <div className="signin-register">
                        <p>Change Password</p>
                    </div>
                    <div className="forms-contain">
                        <div className="returning">
                            <p className="signin-title">Returning user sign in</p>
                            <form onSubmit={(e) => this.props.loginSubmit(e)}>
                                <div className="login-email">
                                    <label className="signin-label">Email:</label>
                                    <input type="text"
                                        name="email"
                                        className="signin-email"
                                    >
                                    </input>
                                </div>
                                <div className="login-password">
                                    <label className="signin-label">Password:</label>
                                    <input type="password"
                                        name="password"
                                        className="signin-password"
                                    >
                                    </input>
                                </div>
                                <input className="login-submit" type="submit" value="Sign in"></input>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default User;