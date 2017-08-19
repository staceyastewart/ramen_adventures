import React, { Component } from 'react';
import SideNav from './SideNav';

class SignIn extends Component {
    render() {
        return (
            <div className="signin-page-container">
                <SideNav />
                <div className="signin-container">
                </div>
            </div>
        );
    }
}

export default SignIn;