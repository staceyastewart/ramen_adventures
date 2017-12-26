import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SideNav extends Component {
    render() {
        return (
            <div className="side-nav-contain">
                <div className="side-nav">
                    Profile
                </div>
                <Link to="/blog">
                    <div className="side-nav">
                        Recent Updates
                    </div>
                </ Link>
                <Link to="/best-of">
                    <div className="side-nav">
                        Best of the Best
                    </div>
                </ Link>
            </div>
        );
    }
}

export default SideNav;