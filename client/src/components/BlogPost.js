import React, { Component } from 'react';
import moment from 'moment';
import BestOfNav from './BestOfNav';
import { Carousel } from 'react-responsive-carousel';
import axios from 'axios';

class BlogPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dateToDisplay: '',
            photoToDisplay: [],
            contentToDisplay: "",
            blogId: props.match.params.id
        }
    }

    componentDidMount() {
        let id = this.state.blogId;
        axios.get(`/posts/${id}`)
        .then((res) => {
            this.setState({
                dateToDisplay: res.data.date,
                photoToDisplay: res.data.photos,
                contentToDisplay: res.data.content
            });
        });
    }

    componentWillUnmount() {
        this.props.resetIsOnSearchResult();
        this.props.resetIsBlogPostClicked();
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
        const { contentToDisplay, photoToDisplay, dateToDisplay } = this.state;
        
        return (
            <div className="single-post-container">
                <BestOfNav />
                <div className="single-blog-post">
                    <div className="blogpost-top-contain">
                        <div className="post-date">{moment(dateToDisplay).format('dddd, MMMM Do, YYYY')}</div>
                        {this.renderReturnButton()}
                    </div>
                    <div className="image-content">
                        {/* <Carousel showThumbs={false} showArrows={true} className="blog-image-container" dynamicHeight emulateTouch>
                            {photoToDisplay.map((photo, i) => {
                                return (
                                    <div key={i}>
                                        <img className="blog-image" src={photoToDisplay[i]} alt="" />
                                    </div>
                                )
                            })}
                        </Carousel> */}
                        {photoToDisplay? 
                        <div className="blog-image">
                            <img className="blog-image" src={photoToDisplay[0]} alt="" />
                        </div>: null}
                        <div className="blog-post-content">{contentToDisplay}</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BlogPost;