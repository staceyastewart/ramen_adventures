import React, { Component } from 'react';
import moment from 'moment';

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


    render() {
        let ramenCat = 'https://i.ytimg.com/vi/sxvdbiGE6ps/hqdefault.jpg';
        return (
            <div className="home home-container">
                <div className="home top-container">
                     <div className="home top-image">
                         <img src={ramenCat} />
                    </div> 
                        
                        <div className="top-right">
                        <div className="home date">
                            {moment().format('MMM Do YYYY')}
                        </div>
                        <div className="home top-text text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam veniam id recusandae ipsam expedita vero mollitia aliquid accusantium, qui obcaecati officiis velit impedit ducimus natus corporis, nam, deserunt iusto placeat.
                        </div>
                    </div>
                </div>
                <div className="home middle-container">
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
                        <div className="home middle-image">
                        </div>
                        <div className="home right-middle-text">
                            <p className="ramen-text">
                            RAMEN RAMEN
                            </p>
                            <p className="ramen-text">
                                Lorem ipsum dolor sit amet
                            </p>
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