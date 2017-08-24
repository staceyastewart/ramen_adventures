import React, { Component } from 'react';
import ToursNav from './ToursNav';

class Tours extends Component {
    render() {
        return (
            <div className="tours-container">
                <ToursNav />
                <h1>Tours and such</h1>
            </div>
        );
    }
}

export default Tours;