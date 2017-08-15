import React, { Component } from 'react';
import moment from 'moment';
import axios from 'axios';

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
                    A one stop shop for everything Ramen!
                </div>
                <div className="home top-middle-container">
                    <div className="home left">
                        <div className="home left-middle-text">
                            <p className="ramen-text">
                            Ramen Blog
                            </p>
                            <p className="ramen-text">
                                Check out my latest posts on my reviews of ramen shops!
                            </p>
                        </div>
                        <div className="home middle-image">
                        </div>
                    </div>
                    <div className="home middle">
                        <div className="home left-middle-text">
                            <p className="ramen-text">
                                Ramen Tour
                            </p>
                            <p className="ramen-text">
                                Book a tour with me to visit my favorite ramen shops!
                            </p>
                        </div>
                        <div className="home middle-image">
                        </div>
                    </div>
                    <div className="home right">
                        <div className="home right-middle-text">
                            <p className="ramen-text">
                                Ramen School
                            </p>
                            <p className="ramen-text">
                                Reserve a spot to take a class on how to make ramen!
                            </p>
                        </div>
                        <div className="home middle-image">
                        </div>
                    </div>
                </div>
                <div className="home bottom-middle-container">
                    <div className="home left">
                        <div className="home middle-image">
                        </div>
                        <div className="home left-middle-text">
                            <p className="ramen-text">
                            RAMEN RAMEN
                            </p>
                            <p className="ramen-text">
                                Lorem ipsum dolor sit amet
                            </p>
                        </div>
                    </div>
                    <div className="home right">
                        <div className="home right-middle-text">
                            <p className="ramen-text">
                            RAMEN RAMEN
                            </p>
                            <p className="ramen-text">
                                Lorem ipsum dolor sit amet
                            </p>
                        </div>
                        <div className="home middle-image">
                        </div>
                    </div>
                </div>
                <div className="home bottom-container">
                    <div className="home bottom-left">
                    </div>
                    <div className="home botton-right">
                        <div>
                            Sign up to recieve exclusive ramen updates
                        </div>
                        <form onSubmit={(e) => this.inputEmail(e)}>
                            <input type="text" 
                                    placeholder="Email" 
                                    onChange={this.handleEmailInputChange} 
                                    value={this.state.emailInput}
                            />
                        </form>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default Home;