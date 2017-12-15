import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class CommentForm extends Component {
    constructor() {
        super();
        const userId = localStorage.getItem('id');
        this.state = { 
            userId, 
            comments: [],
            renderMessage: false
        }
        this.submitComment = this.submitComment.bind(this);
        this.getComments = this.getComments.bind(this);
        this.renderLogInMessage = this.renderLogInMessage.bind(this);
    }

    componentDidMount() {
        this.getComments();
    }

    getComments() {
        axios.get(`/posts/${this.props.blogId}/comments`)
        .then(response => {
            this.setState({ 
                comments: response.data,
             });
        })
    }

    renderLogInMessage() {
        return (
            <div className="comment-message">
                <p>Please log in to leave a comment</p>
                <Link to="/signin" className="nav-link" id="comment-login-link">
                    <div className="signup top-links" onClick={this.props.resetRedirect}>
                        Log In/Sign Up
                                </div>
                </Link>
            </div>
        )
    }

    submitComment(e) { 
        e.preventDefault();
        if (this.state.userId) { 
            axios.post(`/posts/${this.props.blogId}/comments`, { 
                comment: { 
                    content: e.target.comment.value, 
                    user_id: parseInt(this.state.userId),
                    post_id: this.props.blogId
                }
            });
        } else {
            this.setState({ renderMessage: true });
        }
    }
   
    render() {
        return (
            <div>
                {this.state.renderMessage ? this.renderLogInMessage() : null}
                <h1>Leave a Comment</h1>
                <form onSubmit={this.submitComment}>
                    <textarea type="text" name="comment" />
                    <input type="submit" />
                </form>
                <h2>Comments:</h2> 
                {this.state.comments ? 
                this.state.comments.map((comment, i) => {
                    //allow type conversion to compare string to int
                    if (this.props.blogId == comment.post_id) {
                        return <div key={i}>{comment.content}</div>
                    }
                }) : null}          
            </div>
        );
    }
}

export default CommentForm;