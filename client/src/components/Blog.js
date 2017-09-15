import React, { Component } from 'react';
import BestOfNav from './BestOfNav';
import BlogPost from './BlogPost';
import axios from 'axios';

class Blog extends Component {
    constructor() {
        super();
        this.state = {
            photosFirst: [],
            photosSecond: [],
            photosThird: []
        }

        this.getPhotosFirst = this.getPhotosFirst.bind(this);
        this.getPhotosSecond = this.getPhotosSecond.bind(this);
        this.getPhotosThird = this.getPhotosThird.bind(this);
    }

    componentDidMount() {
        this.getPhotosFirst();
        this.getPhotosSecond();
        this.getPhotosThird();
    }

    getPhotosFirst() {
        axios.get('/posts')
        .then((res) => {
            for (let i = res.data.length-1; i >= res.data.length - 2; i--) {
                this.setState(prevState => ({
                    photosFirst: [...prevState.photosFirst, res.data[i].photos[0]]
                  }));
            }
        });
    }

    getPhotosSecond() {
        axios.get('/posts')
        .then((res) => {
            for (let i = res.data.length-3; i >= res.data.length - 4; i--) {
                this.setState(prevState => ({
                    photosSecond: [...prevState.photosSecond, res.data[i].photos[0]]
                  }));
            }
        });
    }

    getPhotosThird() {
        axios.get('/posts')
        .then((res) => {
            for (let i = res.data.length-5; i >= res.data.length - 6; i--) {
                this.setState(prevState => ({
                    photosThird: [...prevState.photosThird, res.data[i].photos[0]]
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
                        <BlogPost   photosFirst={this.state.photosFirst}
                                    photosSecond={this.state.photosSecond}
                                    photosThird={this.state.photosThird}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Blog;