import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import blog from '../images/blog.jpg';
import tour from '../images/tour.jpg';
import school from '../images/school.jpg';
import book from '../images/book.png';
import whiteshirt from '../images/tshirtwhitelogo.png';
import blueshirt from '../images/tshirtbluetokyo.png';
import rtramen from '../images/bannerrt.jpg';
import midramen from '../images/bannermid.jpg';
import ltramen from '../images/bannerlt.jpg';
import ltpicks from '../images/picksleftround.png';
import midpicks from '../images/picksmiddle.png';
import rtpicks from '../images/picksright.png';

class Home extends Component {

    render() {
        return (
            <div className="home home-container">
                <div className="home top-container">
                    <p className="top-text">A one stop shop for everything Ramen!</p> 
                    <img src={ltramen} className="top-image" alt="bowl of ramen" />
                    <img src={midramen} className="top-image" alt="bowl of ramen"/>
                    <img src={rtramen} className="top-image" alt="bowl of ramen"/>
                </div>
                <div className="home top-middle-container">
                    <Link to='/blog' className="nav-link links-container">
                        <div className="home left">
                            <div className="home left-middle-text middle-text">
                                <p className="ramen-text title">
                                Ramen Blog
                                </p>
                                <p className="ramen-text description">
                                    Check out my latest posts on my reviews of ramen shops!
                                </p>
                            </div>
                            <img src={blog} className="home middle-image" alt="bowl of ramen on restaurant table in Japan with Japanese magazine beside it"/>   
                        </div>
                    </Link>
                    <Link to="/tours" className="nav-link links-container">
                        <div className="home middle">
                            <div className="home middle-text">
                                <p className="ramen-text title">
                                    Ramen Tour
                                </p>
                                <p className="ramen-text description">
                                    Book a tour with me to visit my favorite ramen shops!
                                </p>
                            </div>
                            <img src={tour} className="home middle-image tour" alt="black and white of street view in Japan with Ramen shop in frame"/>
                        </div>
                    </Link>
                    <Link to='/tokyo-school' className="nav-link links-container">
                        <div className="home right">
                            <div className="home right-middle-text middle-text">
                                <p className="ramen-text title">
                                    Ramen School
                                </p>
                                <p className="ramen-text description">
                                    Reserve a spot to take a class on how to make ramen!
                                </p>
                            </div>
                            <img src={school} className="home middle-image school" alt="special large pot for cooking ramen on a stove top"/>
                        </div>
                    </Link>
                </div>
                <div className="home bottom-middle-container">
                    <div className="home left bottom-middle">
                        <Link to="/store" className="nav-link">
                            <div className="home left-middle-text">
                                <p className="ramen-text title">
                                    Shop
                                </p>
                                <p className="ramen-text description">
                                    Don't forget to pick up a copy of my book at Top Ramen Shops in Tokyo! I also have t-shirts!
                                </p>
                            </div>
                        </Link>
                        <div className="shop-contain">
                            <img src={book}  className="home bottom-image" alt="cover of Brian's book"/>
                            <img src={whiteshirt}  className="home bottom-image" alt="white t-shirt with RA logo in red"/>
                            <img src={blueshirt}  className="home bottom-image" alt="blue tshirt with tokyo spelled in ramen noodles with chopsticks and bownl"/>
                        </div>
                    </div>
                    <div className="home right bottom-middle">
                        <Link to="/best-of" className="nav-link">
                            <div className="home right-middle-text">
                                <p className="ramen-text title">
                                    My Top Picks
                                </p>
                                <p className="ramen-text description">
                                    Not sure which shops to choose? Check out my list of top shops!
                                </p>
                            </div>
                        </ Link>
                        <div className="picks-contain">
                            <img src={ltpicks}  className="home picks-image" alt="bowl of ramen"/>
                            <img src={midpicks}  className="home picks-image" alt="bowl of ramen"/>
                            <img src={rtpicks}  className="home picks-image" alt="bowl of ramen"/>
                         </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;