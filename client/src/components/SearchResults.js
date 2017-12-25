import React, { PureComponent } from 'react';
import moment from 'moment';
import axios from 'axios';

class SearchResults extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            query: props.match.params.query,
            searchResultsPosts: [],
            loadingSearchResults: true
        }

        this.renderPosts = this.renderPosts.bind(this);
        this.getSearchResults = this.getSearchResults.bind(this);
    }

    componentDidMount() {
        this.getSearchResults(this.state.query);
    }

    componentWillUnmount() {
       this.props.resetIsSearching();
       this.props.resetSearchResultClicked();
    }

    getSearchResults(query) {
        axios.post(`/search`, { q: query })
        .then((res) => {  
            //ref check to prevent setState on unmounted component error.
            if (this.refs.myRef) {
                this.setState({ 
                    searchResultsPosts: res.data.posts,
                    loadingSearchResults: false
                 }); 
            }     
        });
      }

    renderPosts (post, key) {
        const { searchResultsPosts } = this.state;
        const { handleSearchResultClick } = this.props;
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
        const { query, searchResultsPosts } = this.state;
        
        if (!searchResultsPosts) {
            return null;
        }

        return (
            <div className="search-results-container" ref="myRef">
                <div className="results-container">                    
                    {this.state.loadingSearchResults ? 
                    <div className="spinner-container">
                        <h1 className="search-results-header">Loading results...</h1>
                        <i className="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
                    </div> : 
                    <div>
                        <h1 className="search-results-header">There are {searchResultsPosts.length} results for "{query}"</h1>
                        <ul className="results-posts">
                            {searchResultsPosts.map((post, key) => {
                                    return this.renderPosts(post, key);
                                })}
                        </ul>
                    </div>}
                </div>
            </div>
        );
    }
}

export default SearchResults;