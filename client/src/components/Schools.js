import React, { Component } from 'react';
import SchoolsNav from './SchoolsNav';

class Schools extends Component {
    render() {
        return (
            <div className="schools-container">
                <SchoolsNav />
                <div className="schools-inner-container">
                    <h1>Tokyo</h1>
                    <h1>Osaka</h1>
                    <h2>learn to make ramen</h2>
                </div>
            </div>
        );
    }
}

export default Schools;