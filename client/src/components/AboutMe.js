import React, { Component } from 'react';
import brian from '../images/motorbike.jpg';

class AboutMe extends Component {
    render() {
        const youtube = "https://www.youtube.com/channel/UCeKGFXpVg0BaeebrHn4_nkA";
        const facebook = "https://www.facebook.com/ramenadventure";
        const insta = "https://www.instagram.com/ramenadventures/";
        const twitter = "https://twitter.com/ramenadventures";
        return (
            <div className="about-contain">
                <div className="name-contain">
                    <h1 className="name">Brian MacDuckston</h1>
                    <h2 className="about-description">Ramen Enthusiast | Passionate Photographer | All-around Foodie</h2>
                </div>
                <div className="connect-container">
                    <div className="photo-container">
                        <img src={brian} className="brian" alt="Brian standing by motorbike in picturesque scene with mountains snow-capped mountains in the background"/>
                        <p className="caption">
                            This image was taken of me back in 2012 when I was traveling abroad in Osaka.
                        </p>
                    </div>
                    <div className="contact">
                        <p className="contact-me">
                            Contact Me:
                        </p>
                        <div className="about-email-contain">
                            <div>
                                <a  href="mailto:ramenamerican@gmail.com" 
                                    target="_blank"  
                                    rel="noopener noreferrer"
                                    className="social-links about-email"
                                >
                                    <i className="fa fa-envelope-open fa-lg" aria-hidden="true"></i>
                                    <p className="social-text">ramenamerican@gmail.com</p>
                                </a>
                            </div>
                        </div>
                        <p className="contact-me">
                            Connect With Me:
                        </p>
                        <div>
                            <div>
                                <a  href={facebook} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="social-links"
                                >
                                <i className="fa fa-facebook-official fa-lg" aria-hidden="true"></i>
                                    <p className="social-text">Facebook/RamenAdventures</p>
                                </a>
                            </div>
                            <div>
                                <a  href={insta} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="social-links"
                                >
                                <i className="fa fa-instagram fa-lg" aria-hidden="true"></i>
                                    <p className="social-text">Instagram/RamenAdventures</p>
                                </a>
                            </div>
                            <div>
                                <a  href={youtube} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="social-links"
                                >
                                <i className="fa fa-youtube-square fa-lg" aria-hidden="true"></i>
                                    <p className="social-text">Youtube/RamenAdventures</p>
                                </a>
                            </div>
                            <div>
                                <a  href={twitter} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="social-links"
                                >
                                <i className="fa fa-twitter-square fa-lg" aria-hidden="true"></i>
                                    <p className="social-text">twitter.com/RamenAdventures</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bio">
                    <div>
                        <h2 className="bio-title">Mission:</h2>
                        <p className="bio-text">To spread my passion for everything ramen from my writing to teaching how to make ramen!</p>
                    </div>
                    <div>
                        <h2 className="bio-title">How I Started:</h2>
                        <p className="bio-text">I started off as a video game programmer but I soon came to realize that this was not what I wanted to do. So I decided to take a leap and pack my bags to move to Japan. I discovered many different types of ramen and began to write about them on my blog. From there, I started to gain recognition and somewhat of a following that I was able to land print and media gigs. My blog then expanded to tours and shortly after, to ramen schools to teach people about the process and how much goes into creating this dish.</p>

                        <p className="bio-text">Don't forget to connect with me on social media including my <a href={youtube} target="_blank" rel="noopener noreferrer" className="text-link">Youtube</a> channel and <a href={insta} target="_blank" rel="noopener noreferrer" className="text-link">Instagram!</a></p>
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutMe;