import React, { Component } from 'react';
import  BestOfNav from './BestOfNav';

class AboutMe extends Component {
    render() {
        return (
            <div className="about-contain">
                <BestOfNav />
                {this.props.children}
            </div>
        );
    }
}

export default AboutMe;