import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import SideNav from './SideNav';

class SignIn extends Component {

    render() {
        if (this.props.redirectToRegister) {
            return (
            <Redirect to="/register"/>
            )
          }

        return (
            <div className="signin-page-container">
                <SideNav />
                <div className="signin-container">
                    <div className="signin-register">
                        <p>Sign In/Register</p>
                    </div>
                    <div className="forms-contain">
                        <div className="returning">
                            <p className="signin-title">Returning user sign in</p>
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
                        {/* <hr className="signin-mobile-hr" /> */}
                        <div className="new-user">
                            <p className="signin-title">New user registration</p>
                            <form onSubmit={(email) => this.props.emailSubmit(email)}>
                                <div>
                                    <label className="signin-label">Email:</label>
                                    <input  type="text" 
                                            className="signin-register-input" 
                                            name="email"
                                    >
                                    </input>
                                </div>
                                    <input type="submit" value="Register" className="register-submit" 
                                    >
                                    </input>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignIn;