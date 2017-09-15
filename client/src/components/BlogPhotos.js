import React, { Component } from 'react';

class BlogPhotos extends Component {
    constructor() {
        super();
        this.handleImageClick = this.handleImageClick.bind(this);
    }

    handleImageClick() {
        console.log("handled");
    }

    render() {
        const { firstPost, secondPost, thirdPost } = this.props;
    
        return (
            <div>
                <div className="posts">
                    {firstPost.map((photo, i) => {
                        return (
                            <img    key={firstPost[i].id} 
                                    src={firstPost[i].photos[0]} 
                                    className="post" 
                                    alt=""
                                    onClick={this.handleImageClick}
                            />)}
                        )}
                </div>
                <div className="post-text">
                </div>
                <div className="posts">
                    {secondPost.map((photo, i) => {
                            return (
                                <img    key={secondPost[i].id} 
                                        src={secondPost[i].photos[0]} 
                                        className="post" 
                                        alt=""
                                />)}
                            )}
                </div>
                <div className="post-text">
                </div>
                <div className="posts">
                    {thirdPost.map((photo, i) => {
                            return (
                                <img    key={thirdPost[i].id} 
                                        src={thirdPost[i].photos[0]} 
                                        className="post" 
                                        alt=""
                                />)}
                            )}
                </div>
                <div className="post-text">
                </div>
            </div>
        );
    }
}

export default BlogPhotos;