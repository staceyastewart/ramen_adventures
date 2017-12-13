import React, { Component } from 'react';
import BlogPhotos from './BlogPhotos';

class Blog extends Component {

    render() {
        return (
            <div className="blog-container">
                <div className="posts-container">
                    <h2 className="recent-posts-header">Recent Posts:</h2>
                    <div className="post-container">
                        <BlogPhotos firstPost={this.props.firstPost}
                                    secondPost={this.props.secondPost}
                                    thirdPost={this.props.thirdPost}
                                    handleFirstBlogImageClick={this.props.handleFirstBlogImageClick}
                                    handleSecondBlogImageClick={this.props.handleSecondBlogImageClick}
                                    handleThirdBlogImageClick={this.props.handleThirdBlogImageClick}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default Blog;