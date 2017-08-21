import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SideNav from './SideNav';

class SignIn extends Component {
    render() {
        return (
            <div className="signin-page-container">
                <SideNav />
                <div className="signin-container">
                    <div className="signin-register">
                        <p>Sign In/Register</p>
                    </div>
                    <div className="forms-contain">
                        <div className="returning">
                            <p>Returning user sign in</p>
                            <form onSubmit={(e) => this.props.loginSubmit(e)}>
                                <div className="login-email">
                                    <label className="signin-label">Email:</label>
                                    <input  type="text" 
                                            name="email" 
                                            className="signin-email"
                                    >
                                    </input>
                                </div>
                                <div className="login-password">
                                    <label className="signin-label">Password:</label>
                                    <input  type="password" 
                                            name="password" 
                                            className="signin-password"
                                    >
                                    </input>
                                    <p>Forgot your password?</p>
                                </div>
                                <input className="login-submit" type="submit" value="Sign in"></input>
                                
                            </form>
                        </div>
                        <div className="new-user">
                            <p>New user registration</p>
                            <form>
                                <div>
                                    <label className="signin-label">Email:</label>
                                    <input type="text" className="signin-register-input"></input>
                                </div>
                                <Link to="/register" className="signin-register-link">
                                    <div className="register-submit">
                                        Register
                                    </div>
                                </Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignIn;