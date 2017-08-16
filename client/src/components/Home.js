import React, { Component } from 'react';
import moment from 'moment';
import axios from 'axios';
import blog from '../images/blog.jpg';
import tour from '../images/tour.jpg';
import school from '../images/school.jpg';
import yticon from '../images/yticon.png';
import fbicon from '../images/fbicon.png';
import igicon from '../images/igicon.png';
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
    constructor(props) {
    super(props);

        this.state = {
            emailInput: ''
        }
    }

     inputEmail = (e) => {
        e.preventDefault();
        //api call to database
        this.setState({ emailInput: '' });
    }

    handleEmailInputChange = (event) => {
        this.setState({ emailInput: event.target.value })
    }

    getPhotos = () => {
    axios.get('/photos/1313')
      .then((res) => {
        this.setState({ photo: res.data.link });
      })
  }

  componentDidMount = () => {
      this.getPhotos();
  }

    render() {
        let photo1 = this.state.photo;
        return (
            <div className="home home-container">
                
                <div className="home top-container">
                    <p className="top-text">A one stop shop for everything Ramen!</p> 
                    <img src={ltramen} className="top-image" />
                    <img src={midramen} className="top-image" />
                    <img src={rtramen} className="top-image" />
                </div>
                <div className="home top-middle-container">
                    <div className="home left">
                        <div className="home left-middle-text middle-text">
                            <p className="ramen-text title">
                            Ramen Blog
                            </p>
                            <p className="ramen-text description">
                                Check out my latest posts on my reviews of ramen shops!
                            </p>
                        </div>
                        <img src={blog} className="home middle-image"/>   
                    </div>
                    <div className="home middle">
                        <div className="home middle-text">
                            <p className="ramen-text title">
                                Ramen Tour
                            </p>
                            <p className="ramen-text description">
                                Book a tour with me to visit my favorite ramen shops!
                            </p>
                        </div>
                        <img src={tour} className="home middle-image tour"/>
                    </div>
                    <div className="home right">
                        <div className="home right-middle-text middle-text">
                            <p className="ramen-text title">
                                Ramen School
                            </p>
                            <p className="ramen-text description">
                                Reserve a spot to take a class on how to make ramen!
                            </p>
                        </div>
                        <img src={school} className="home middle-image school"/>
                    </div>
                </div>
                <div className="home bottom-middle-container">
                    <div className="home left bottom-middle">
                         <div className="home left-middle-text">
                            <p className="ramen-text title">
                                Shop
                            </p>
                            <p className="ramen-text description">
                                Don't forget to pick up a copy of my book at Top Ramen Shops in Tokyo! I also have t-shirts!
                            </p>
                        </div>
                        <div className="shop-contain">
                            <img src={book}  className="home bottom-image"/>
                            <img src={whiteshirt}  className="home bottom-image"/>
                            <img src={blueshirt}  className="home bottom-image"/>
                        </div>
                    </div>
                    <div className="home right bottom-middle">
                        <div className="home right-middle-text">
                            <p className="ramen-text title">
                                My Top Picks
                            </p>
                            <p className="ramen-text description">
                                Not sure which shops to choose? Check out my list of top shops!
                            </p>
                        </div>
                        <div className="picks-contain">
                            <img src={ltpicks}  className="home picks-image"/>
                            <img src={midpicks}  className="home picks-image"/>
                            <img src={rtpicks}  className="home picks-image"/>
                         </div>
                    </div>
                </div>
                <div className="home bottom-container">
                    <div className="home bottom-left">
                        <div>
                            Sign up to recieve exclusive ramen updates
                        </div>
                        <form onSubmit={(e) => this.inputEmail(e)}>
                            <input type="text" 
                                    placeholder="Enter Email" 
                                    onChange={this.handleEmailInputChange} 
                                    value={this.state.emailInput}
                                    className="email-input"
                            />
                        </form>
                    </div>
                    <div className="home bottom-right">
                        <div className="social-contain">
                            <img className="social" src={yticon}/>
                            <img className="social" src={fbicon} />
                            <img className="ig" src={igicon} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;