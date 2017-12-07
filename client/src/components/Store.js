import React, { Component } from 'react';
import book from '../images/book.png';

class Store extends Component {
    render() {
        return (
            <div className="store-container">
                <h1 className="store-header">Store</h1>
                <div className="store-top-div">
                    <div className="store-book-container">
                        <img className="store-bookcover" src={book} alt="cover of brian's guidebook" />
                            <p>Brian's Guide to 50 Great Tokyo Ramen Shops</p>
                            <p>Buy on Amazon</p>
                    </div>
                    <div className="store-book-container">
                        <img className="store-bookcover" src={book} alt="cover of brian's guidebook" />
                            <p>Not in Japan?</p>
                            <p>I'll ship you the book for $25!</p>
                            <p>Click on the paypal link and enter your information.</p>
                    </div>
                </div>
            </div>   
        );
    }
}

export default Store;