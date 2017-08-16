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
    }

    render() {
        return (
            <div>
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
                            <img className="social" src={yticon} alt="youtube logo"/>
                            <img className="social" src={fbicon} alt="facebook logo"/>
                            <img className="ig" src={igicon} alt="instagram logo"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;