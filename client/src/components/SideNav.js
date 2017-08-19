import React, { Component } from 'react';

class SideNav extends Component {
    render() {
        return (
            <div className="side-nav-contain">
                <div className="side-nav">
                    Profile
                </div>
                <div className="side-nav">
                    Recent Updates
                </div>
                <div className="side-nav">
                    Best of the Best
                </div>
            </div>
        );
    }
}

export default SideNav;