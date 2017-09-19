import React, { Component } from 'react';
import BestOfNav from './BestOfNav';
import moment from 'moment';

class SearchResults extends Component {
    constructor() {
        super();
        this.renderPosts = this.renderPosts.bind(this);
    }

    componentWillUnmount() {
       this.props.resetIsSearching();
       this.props.resetSearchResultClicked();
    }

    renderHeader() {
        const { query, searchResultsPosts  } = this.props;
        if (!searchResultsPosts) {
            return (
                <div className="spinner-container">
                    <h1 className="search-results-header">Loading results...</h1>
                    <i className="fa fa-spinner fa-pulse fa-3x fa-fw"></i> 
                </div>
            )
        } else {
            return <h1 className="search-results-header">There are {searchResultsPosts.length} results for "{query}"</h1>
        }
    }

    renderPosts (post, key) {
        const { searchResultsPosts, handleSearchResultClick } = this.props;
            return (
                <li key={key} onClick={() => handleSearchResultClick(post)}>
                    <div className="results-post">
                        <p className="results-post-text"> 
                            <span className="results-date">
                                Posted on: {moment(searchResultsPosts[key].date).format('MMMM Do YYYY')} -
                            </span>
                            {searchResultsPosts[key].content.slice(0, 300)}...(Click for more)
                        </p>
                    </div>
                </li>
            )
    }

    render() {
        const { searchResultsPosts } = this.props;
        if (!searchResultsPosts) {
            return null;
        }

        return (
            <div className="search-results-container">
                <BestOfNav />
                <div className="results-container">
                    {this.renderHeader()}
                    <ul className="results-posts">
                        {searchResultsPosts.map((post, key) => {
                                return this.renderPosts(post, key);
                            })}
                    </ul>
                </div>
            </div>
        );
    }
}

export default SearchResults;