import React, { Component } from 'react';
import BestOfNav from './BestOfNav';

class SearchResults extends Component {
    constructor() {
        super();
        this.renderPosts = this.renderPosts.bind(this);
    }
    componentWillUnmount() {
       this.props.resetIsSearching();
    }

    renderPosts () {
        const { searchResultsPosts } = this.props;
            Object.keys(searchResultsPosts).map((key) => {
                searchResultsPosts[key].content
            })
        
    }

    render() {
        const { query, searchResultsPosts, searchResultsShops } = this.props;
        const totalResults = searchResultsPosts.length + searchResultsShops.length;
       
        return (
            <div className="search-results-container">
                <BestOfNav />
                <div className="results-container">
                <h1>There are {totalResults} results for "{query}"</h1>
                <ul className="results-posts">
                    {Object.keys(searchResultsPosts).map((key) => {
                        return <li key={key}>{searchResultsPosts[key].content}</li>
                    })}
                </ul>
                </div>
            </div>
        );
    }
}

export default SearchResults;