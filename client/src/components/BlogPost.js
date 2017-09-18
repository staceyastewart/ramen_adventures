import React, { Component } from 'react';
import moment from 'moment';
import BestOfNav from './BestOfNav';
import { Carousel } from 'react-responsive-carousel';

class BlogPost extends Component {

    render() {
        const { contentToDisplay, photoToDisplay, dateToDisplay } = this.props;
        if (!photoToDisplay) {
            return null;
        }
        return (
            <div className="single-post-container">
                <BestOfNav />
                <div className="single-blog-post">
                    <div className="post-date">{moment(dateToDisplay).format('dddd, MMMM Do, YYYY')}</div>
                    <div className="image-content">
                        <Carousel showThumbs={false} showArrows={true} className="blog-image-container" dynamicHeight emulateTouch>
                            {photoToDisplay.map((photo, i) => {
                                return (
                                    <div key={i}>
                                        <img className="blog-image" src={photoToDisplay[i]} alt="" />
                                    </div>
                                )
                            })}
                        </Carousel>
                        <div className="blog-post-content">{contentToDisplay}</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BlogPost;