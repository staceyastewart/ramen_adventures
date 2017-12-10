import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';

class TokyoSchool extends Component {
    render() {
        return (
            <div className="tokyo-school-wrapper">
                <div className="tokyo-school-container">
                    <h1 className="tokyo-school-header">Tokyo Ramen School</h1>
                    <div className="tokyo-school-carousel-container">
                        <Carousel showThumbs={false} showArrows={true} dynamicHeight emulateTouch useKeyboardArrows>
                            <div className="tokyo-school-image-div">
                                <img    src="https://c4.staticflickr.com/6/5603/25381111139_4554acc4a8_c.jpg" 
                                        className="tokyo-school-image" 
                                        alt=""/>
                            </div>
                            <div className="tokyo-school-image-div">
                                <img    src="https://c5.staticflickr.com/6/5455/30715481060_76164b23e9_c.jpg"
                                        className="tokyo-school-image"
                                        alt="" />
                            </div>
                            <div className="tokyo-school-image-div">
                                <img    src="https://c8.staticflickr.com/6/5692/25381112639_1987b7c010_c.jpg"
                                        className="tokyo-school-image"
                                        alt="" />
                            </div>
                            <div className="tokyo-school-image-div">
                                <img    src="https://c5.staticflickr.com/6/5824/22838653028_5a1d4125c4_c.jpg"
                                        className="tokyo-school-image" 
                                        alt="" />
                            </div>
                            <div className="tokyo-school-image-div">
                                <img    src="https://c6.staticflickr.com/6/5786/31017106245_79df20dc9c_c.jpg"
                                        className="tokyo-school-image"
                                        alt="" />
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        );
    }
}

export default TokyoSchool;
