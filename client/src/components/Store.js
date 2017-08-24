import React, { Component } from 'react';
import BestOfNav from './BestOfNav';

class Store extends Component {
    render() {
        return (
            <div className="store-container">
                <BestOfNav />
                <h1>Store here</h1>
            </div>
        );
    }
}

export default Store;