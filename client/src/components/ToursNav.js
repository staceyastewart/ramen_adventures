import React, { Component } from 'react';

class ToursNav extends Component {
    render() {
        return (
            <div className="side-nav-contain">
                <div className="side-nav">
                    Previous Tours
                </div>
                <div className="side-nav">
                    Attractions
                </div>
                <div className="side-nav">
                    Recommendations
                </div>
                <div className="side-nav">
                    Book a Tour
                </div>
                <div className="side-nav">
                    FAQs
                </div>
            </div>
        );
    }
}

export default ToursNav;