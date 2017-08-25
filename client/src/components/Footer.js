import React, { Component } from 'react';
import yticon from '../images/yticon.png';
import fbicon from '../images/fbicon.png';
import igicon from '../images/igicon.png';

class Footer extends Component {
    constructor(props) {
    super(props);

        this.state = {
            emailInput: ''
        }

        this.inputEmail = this.inputEmail.bind(this);
        this.handleEmailInputChange = this.handleEmailInputChange.bind(this);
    }

    inputEmail(e){
        e.preventDefault();
        //api call to database
        this.setState({ emailInput: '' });
    }

    handleEmailInputChange(event){
        this.setState({ emailInput: event.target.value })
    }

    render() {
        const youtube = "https://www.youtube.com/channel/UCeKGFXpVg0BaeebrHn4_nkA";
        const facebook = "https://www.facebook.com/ramenadventure";
        const insta = "https://www.instagram.com/ramenadventures/";
        return (
            <div>
                <hr />
                <div className="home bottom-container">
                    <div className="home bottom-left">
                        <div>
                            Sign up to receive exclusive ramen updates
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