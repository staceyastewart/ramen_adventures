import React, { Component } from 'react';
import BestOfNav from './BestOfNav';

class Blog extends Component {
    render() {
        return (
            <div className="blog-container">
                <BestOfNav />
                {/* <img src="https://media.giphy.com/media/Fj0MaDHcLycOk/giphy.gif" alt="pusheen cat eating ramen" /> */}
            </div>
        );
    }
}

export default Blog;