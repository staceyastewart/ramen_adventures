import React, { Component } from 'react';
import BestOfNav from './BestOfNav';
import BlogPhotos from './BlogPhotos';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Blog extends Component {
    constructor() {
        super();
        this.state = {
            firstPost: [],
            secondPost: [],
            thirdPost: []
        }

        this.getFirstPost = this.getFirstPost.bind(this);
        this.getSecondPost = this.getSecondPost.bind(this);
        this.getThirdPost = this.getThirdPost.bind(this);
    }

    componentDidMount() {
        this.getFirstPost();
        this.getSecondPost();
        this.getThirdPost();
    }

    getFirstPost() {
        axios.get('/posts')
        .then((res) => {
            for (let i = res.data.length-1; i >= res.data.length - 2; i--) {
                this.setState(prevState => ({
                    firstPost: [...prevState.firstPost, res.data[i]]
                  }));
            }
        });
    }

    getSecondPost() {
        axios.get('/posts')
        .then((res) => {
            for (let i = res.data.length-3; i >= res.data.length - 4; i--) {
                this.setState(prevState => ({
                    secondPost: [...prevState.secondPost, res.data[i]]
                  }));
            }
        });
    }

    getThirdPost() {
        axios.get('/posts')
        .then((res) => {
            for (let i = res.data.length-5; i >= res.data.length - 6; i--) {
                this.setState(prevState => ({
                    thirdPost: [...prevState.thirdPost, res.data[i]]
                  }));
            }
        });
    }


    render() {
        return (
            <div className="blog-container">
                <BestOfNav />
                <div className="posts-container">
                    <h2>Recent Posts</h2>
                    <div className="post-container">
                        <Link to="/blogpost">
                        <BlogPhotos firstPost={this.state.firstPost}
                                    secondPost={this.state.secondPost}
                                    thirdPost={this.state.thirdPost}/>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Blog;