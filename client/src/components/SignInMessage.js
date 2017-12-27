import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SignInMessage extends Component {
    render() {
        return (
            <div className="signin-message-container">
                <h1 className="signin-message-prompt">Thanks for registering! Please Log in.</h1>
                <Link to="/signin" className="" onClick={this.props.resetRegisterSuccesMsg}>
                    <div className="signup login-button" >
                        Log In
                    </div>
                </Link>
            </div>
        );
    }
}

export default SignInMessage;