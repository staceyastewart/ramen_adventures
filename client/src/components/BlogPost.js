import React, { Component } from 'react';
import moment from 'moment';
import axios from 'axios';
import CommentForm from './CommentForm';
import BlogMobileCarousel from './BlogMobileCarousel';

class BlogPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dateToDisplay: '',
            photoToDisplay: [],
            contentToDisplay: "",
            titleToDisplay: '',
            blogId: props.match.params.id
        }
    }

    componentDidMount() {
        let { blogId } = this.state;
        axios.get(`/posts/${blogId}`)
        .then((res) => {
            this.setState({
                dateToDisplay: res.data.date,
                photoToDisplay: res.data.photos,
                contentToDisplay: res.data.content,
                titleToDisplay: res.data.title
            });
        });
    }

    componentWillUnmount() {
        this.props.resetIsOnSearchResult();
        this.props.resetIsBlogPostClicked();
    }

    renderReturnButton() {
        //only allow a return to search button if the user got to this blogpost via search AND if the search param
        //persists in state. Otherwise there won't be a search to return to.
        if (this.props.isOnSearchResult && this.props.searchParam) {
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
            <div className="single-post-container" ref="myRef">
                <div className="single-blog-post">
                    <div className="blogpost-top-contain">
                        <div className="post-date">{moment(dateToDisplay).format('dddd, MMMM Do, YYYY')}</div>
                        <div className="post-title">{this.state.titleToDisplay}</div>
                        {this.renderReturnButton()}
                    </div>
                    <div className="image-content-desktop">
                        {photoToDisplay.length ? 
                        <div className="blog-image-container">
                            {photoToDisplay.map((photo, i) => {
                                return (
                                    <div key={i} className="blog-image-div">
                                        <img className="blog-image" src={photoToDisplay[i]} alt="" />
                                    </div>
                                )
                            })}
                        </div> : null}
                    </div>
                    <BlogMobileCarousel photoToDisplay={this.state.photoToDisplay} />
                    <div className="blog-post-content">{contentToDisplay}</div>
                    <CommentForm blogId={this.state.blogId} />
                </div>
            </div>
        );
    }
}

export default BlogPost;