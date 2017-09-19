import React, { Component } from 'react';
import moment from 'moment';
import BestOfNav from './BestOfNav';
import { Carousel } from 'react-responsive-carousel';

class BlogPost extends Component {

    componentWillUnmount() {
        console.log('unmounting')
        this.props.resetIsOnSearchResult();
    }

    renderReturnButton() {
        if (this.props.isOnSearchResult) {
            return (
                <div className="return" onClick={this.props.handleReturnToSearchClick}>
                    <p className="blogpost-return">Return to Search Results</p>
                    <i className="fa fa-angle-double-right blogpost-arrow" aria-hidden="true"></i>
                </div>
            )
        }
    }
    
    render() {
        const { contentToDisplay, photoToDisplay, dateToDisplay } = this.props;
        
        return (
            <div className="single-post-container">
                <BestOfNav />
                <div className="single-blog-post">
                    <div className="blogpost-top-contain">
                        <div className="post-date">{moment(dateToDisplay).format('dddd, MMMM Do, YYYY')}</div>
                        {this.renderReturnButton()}
                    </div>
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