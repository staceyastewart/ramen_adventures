import React, { Component } from 'react';

class BlogMobileCarousel extends Component {
    render() {
        return (
            <div>
                {photoToDisplay.length ?
                    <div className="blog-image-container">
                        <Carousel showThumbs={false} showArrows={true} dynamicHeight emulateTouch useKeyboardArrows>
                            {photoToDisplay.map((photo, i) => {
                                return (
                                    <div key={i} className="blog-image-div">
                                        <img className="blog-image" src={photoToDisplay[i]} alt="" />
                                    </div>
                                )
                            })}
                        </Carousel></div> : null}
            </div>
        );
    }
}

export default BlogMobileCarousel;