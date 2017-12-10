import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';

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
                                        alt="man stirring stove on pot"/>
                            </div>
                            <div className="tokyo-school-image-div">
                                <img    src="https://c5.staticflickr.com/6/5455/30715481060_76164b23e9_c.jpg"
                                        className="tokyo-school-image"
                                        alt="mushrooms cooking in a pot" />
                            </div>
                            <div className="tokyo-school-image-div">
                                <img    src="https://c8.staticflickr.com/6/5692/25381112639_1987b7c010_c.jpg"
                                        className="tokyo-school-image"
                                        alt="pot with thermometer attached" />
                            </div>
                            <div className="tokyo-school-image-div">
                                <img    src="https://c5.staticflickr.com/6/5824/22838653028_5a1d4125c4_c.jpg"
                                        className="tokyo-school-image" 
                                        alt="two people pour liquid out of a large pot through a strainer" />
                            </div>
                            <div className="tokyo-school-image-div">
                                <img    src="https://c6.staticflickr.com/6/5786/31017106245_79df20dc9c_c.jpg"
                                        className="tokyo-school-image"
                                        alt="two bowls of ramen" />
                            </div>
                        </Carousel>
                    </div>
                    <h2 className="tokyo-school-subheader">ラ塾 - RaJuku</h2>
                    <p>Looking for a ramen school in Tokyo? Look no further than the RaJuku. The RaJuku brings together some of Tokyo's most revered ramen chefs for two kinds of classes. One is a simple, one-day experience and the other is an intensive, in-depth 15 days of ramen study.</p>
                    <h3 className="tokyo-school-paragraph-intro">1-Day Course (4 hours)</h3>
                    <p>You'll learn a classic shoyu ramen from the Jiraigen Syndicate (check out their Saikoro shop <Link to="/search/2-28-8%20Tokyo,%20Nakano-ku" className="tokyo-school-link">here</Link>). Soup, tare seasoning, and toppings are all covered in this class, and at the end you'll plate your own bowl of classic Tokyo-style ramen. You can get a good idea of this class here:</p>
                    <div className="tokyo-school-video-wrapper">
                    <iframe className="tokyo-school-video" width="640" height="360" src="https://www.youtube.com/embed/o1lBdQFGFMQ" frameBorder="0" allowFullScreen title="ramen lesson at Tokyo ramen school"></iframe>
                    </div>
                    <p>The school is located near Fuchinobe Station, about one hour from central Tokyo. The costs are listed below. More people can join for half price. Please email me at <a className="tokyo-school-link" href="mailto:ramenamerican@gmail.com" target="_blank" rel="noopener noreferrer">ramenamerican@gmail.com</a> and I will put you in touch with the school.</p>
                </div>
            </div>
        );
    }
}

export default TokyoSchool;
