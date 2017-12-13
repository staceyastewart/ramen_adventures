import React, { Component } from 'react';
import yticon from '../images/yticon.png';
import fbicon from '../images/fbicon.png';
import igicon from '../images/igicon.png';
import { Link } from 'react-router-dom';

class Footer extends Component {
   
    render() {
        const youtube = "https://www.youtube.com/channel/UCeKGFXpVg0BaeebrHn4_nkA";
        const facebook = "https://www.facebook.com/ramenadventure";
        const insta = "https://www.instagram.com/ramenadventures/";
        return (
            <div>
                <hr />
                <div className="home bottom-container">
                    <div className="home bottom-left">
                        <div className="signup-text">
                            Sign up to receive exclusive ramen updates
                        </div>
                        <Link to="/register" className="footer-signup-button-link">
                            <input type="submit" value="Sign Up!" className="register footer-signup-button" />
                        </Link>
                    </div>
                    <div className="home bottom-right">
                        <div className="social-contain">
                            <a href={youtube} target="_blank">
                                <img className="social" src={yticon} alt="youtube logo"/>
                            </a>
                            <a href={facebook} target="_blank">
                                <img className="social" src={fbicon} alt="facebook logo"/>
                            </a>
                            <a href={insta} target="_blank">
                                <img className="ig" src={igicon} alt="instagram logo"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;