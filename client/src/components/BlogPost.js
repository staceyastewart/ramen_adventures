import React, { Component } from 'react';
import moment from 'moment';
import BestOfNav from './BestOfNav';

class BlogPost extends Component {
    render() {
        const { contentToDisplay, photoToDisplay, dateToDisplay } = this.props;
        return (
            <div className="single-post-container">
                <BestOfNav />
                <div className="single-blog-post">
                    <div className="post-date">{moment(dateToDisplay).format('dddd, MMMM Do, YYYY')}</div>
                    <div className="image-content">
                        <img className="blog-image" src={photoToDisplay} alt="" />
                        <div className="blog-post-content">{contentToDisplay}</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BlogPost;