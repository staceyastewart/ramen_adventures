import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';

class BestOf extends Component {
    constructor() {
        super();
        this.state = {
            bestOfs: [],
            loadingBestOfs: true
        }
        this.getBestOfs = this.getBestOfs.bind(this);
        this.renderPosts = this.renderPosts.bind(this);
    }

    componentDidMount() {
        this.getBestOfs();
    }


    getBestOfs() {
        axios.get('/posts')
        .then(res => {
            res.data.map(post => {
                if(post.best_of) { 
                this.setState(prevState => ({
                    bestOfs: [...prevState.bestOfs, post],
                    loadingBestOfs: false
                    }))
                }
            })
        })
    }

    renderPosts(post, key) {
        const { bestOfs } = this.state;
        const { handleBestOfClick } = this.props;
            return (
                <li key={key} onClick={() => handleBestOfClick(post)}>
                    <div className="results-post">
                        <p className="results-post-text">
                            <span className="results-date">
                                Posted on: {moment(bestOfs[key].date).format('MMMM Do YYYY')} -
                                {bestOfs[key].title} -
                                </span>
                            {bestOfs[key].content.slice(0, 300)}...(Click for more)
                            </p>
                    </div>
                </li>
            )
    } 

    render() {
        const { bestOfs } = this.state;

        return (
            <div>
                <div className="results-container">
                    <h1>Best of the Best</h1>
                    <p>The question I am most frequently asked, apart from, "Can you use chopsticks?" is about my favorite ramen shop. The simple answer is that I don't have a favorite. I love travel and food, called 食べ歩き (tabearuki) in Japan. My favorite shop is the one I'm going to tomorrow.

                    No one likes this answer.

                    So I have made some best-of lists over the years. Avoid Yelp or other non-Japanese ranking sites. Lines are a good thing. Lines of people with suitcases negates all assumptions; some touristy places are amazing, some are downright awful.</p>
                    {this.state.loadingBestOfs ? <p className="best-loading-message">Loading Best of List ...</p> : 
                    <ul className="results-posts">
                        {bestOfs.map((post, key) => {
                            return this.renderPosts(post, key);
                        })}
                    </ul>}
                </div>
            </div>
        );
    }
}

export default BestOf;