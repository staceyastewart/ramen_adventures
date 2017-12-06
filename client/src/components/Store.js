import React, { Component } from 'react';
import book from '../images/book.png';

class Store extends Component {
    render() {
        return (
            <div className="store-container">
                <h1 className="store-header">Store</h1>
                <div className="store-top-div">
                    <img className="store-bookcover" src={book} alt="cover of brian's guidebook" />
                    <img className="store-bookcover" src={book} alt="cover of brian's guidebook" />
                </div>
            </div>   
        );
    }
}

export default Store;