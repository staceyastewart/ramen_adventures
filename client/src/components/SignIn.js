import React, { Component } from 'react';
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
                            <form>
                                <div className="login-email">
                                    <label>Email:</label>
                                    <input type="text"></input>
                                </div>
                                <div className="login-password">
                                    <label>Password:</label>
                                    <input type="text"></input>
                                </div>
                                <input className="login-submit" type="submit" value="Sign in"></input>
                                <p>Forgot your password?</p>
                            </form>
                        </div>
                        <div className="new-user">
                            <p>New user registration</p>
                            <form>
                                <div>
                                    <label>Email:</label>
                                    <input type="text"></input>
                                </div>
                                <input className="login-submit" type="submit" value="Register"></input>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignIn;