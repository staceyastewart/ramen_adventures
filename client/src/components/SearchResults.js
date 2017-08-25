import React, { Component } from 'react';

class SearchResults extends Component {

    componentWillUnmount() {
       this.props.resetIsSearching();
    }

    render() {
        const { query, searchResultsPosts, searchResultsShops } = this.props;
        const totalResults = searchResultsPosts.length + searchResultsShops.length;
       
        return (
            <div>
                <h1>There are {totalResults} results for "{query}"</h1>
            </div>
        );
    }
}

export default SearchResults;