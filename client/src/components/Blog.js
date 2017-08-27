import React, { Component } from 'react';
import BestOfNav from './BestOfNav';
import BlogPost from './BlogPost';

class Blog extends Component {
    render() {
        return (
            <div className="blog-container">
                <BestOfNav />
                <div className="posts-container">
                    <h2>Recent Posts</h2>
                    <div className="posts">
                       <BlogPost />
                       <BlogPost />
                       <BlogPost />
                       <BlogPost />
                       <BlogPost />
                    </div>
                </div>
            </div>
        );
    }
}

export default Blog;