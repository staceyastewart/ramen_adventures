import React, { Component } from 'react';
import moment from 'moment';

class BlogPhotos extends Component {

    render() {
        const { firstPost, secondPost, thirdPost } = this.props;
    
        return (
            <div>
                <div className="posts">
                    {firstPost.map((post, i) => {
                        return (
                            <div    className="blog-post-container" 
                                    key={firstPost[i].id}
                                    onClick={() => this.props.handleFirstBlogImageClick(i)}
                            >
                                <img    src={firstPost[i].photos[0]} 
                                        className="post" 
                                        alt=""
                                />
                                <div className="post-text">
                                    <p className="blog-post-date">
                                        {moment(firstPost[i].date).format('dddd, MMMM Do, YYYY')}
                                    </p>
                                    <p className="blog-post-teaser">
                                        {firstPost[i].content.slice(0, 60)}....(click for more)
                                    </p>
                                </div>
                            </div>
                            )}
                        )}
                </div>
                <div className="posts">
                    {secondPost.map((photo, i) => {
                            return (
                                <div    className="blog-post-container" 
                                        key={secondPost[i].id}
                                        onClick={() => this.props.handleSecondBlogImageClick(i)}
                                >
                                    <img    src={secondPost[i].photos[0]} 
                                            className="post" 
                                            alt=""
                                    />
                                    <div className="post-text">
                                        <p className="blog-post-date">
                                            {moment(secondPost[i].date).format('dddd, MMMM Do, YYYY')}
                                        </p>
                                        <p className="blog-post-teaser">
                                            {secondPost[i].content.slice(0, 60)}....(click for more)
                                        </p>
                                    </div>
                                </div>
                                )}
                            )}
                </div>
                <div className="posts">
                    {thirdPost.map((photo, i) => {
                            return (
                                <div    className="blog-post-container" 
                                        key={thirdPost[i].id}
                                        onClick={() => this.props.handleThirdBlogImageClick(i)}
                                >
                                    <img    src={thirdPost[i].photos[0]} 
                                            className="post" 
                                            alt=""
                                    />
                                    <div className="post-text">
                                        <p className="blog-post-date">
                                            {moment(thirdPost[i].date).format('dddd, MMMM Do, YYYY')}
                                        </p>
                                        <p className="blog-post-teaser">
                                            {thirdPost[i].content.slice(0, 60)}....(click for more)
                                        </p>
                                    </div>
                                </div>
                                )}
                            )}
                </div>
            </div>
        );
    }
}

export default BlogPhotos;