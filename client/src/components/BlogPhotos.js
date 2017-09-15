import React, { Component } from 'react';

class BlogPhotos extends Component {

    render() {
        const { photosFirst, photosSecond, photosThird } = this.props;
    
        return (
            <div>
                <div className="posts">
                    {photosFirst.map((photo, key) => <img key={key} src={photo} className="post" alt=""/>)}
                </div>
                <div className="post-text">
                </div>
                <div className="posts">
                    {photosSecond.map((photo, key) => <img key={key} src={photo} className="post" alt=""/>)}
                </div>
                <div className="post-text">
                </div>
                <div className="posts">
                    {photosThird.map((photo, key) => <img key={key} src={photo} className="post" alt=""/>)}
                </div>
                <div className="post-text">
                </div>
            </div>
        );
    }
}

export default BlogPhotos;