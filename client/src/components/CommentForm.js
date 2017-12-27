import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Comment from './Comment';

class CommentForm extends Component {
    constructor() {
        super();
        const loggedInUser = localStorage.getItem('id');
        this.state = { 
            loggedInUser, 
            comments: [],
            renderMessage: false,
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
                comments: response.data.comments,
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
        if (this.state.loggedInUser) { 
            axios.post(`/posts/${this.props.blogId}/comments`, { 
                comment: { 
                    content: e.target.comment.value, 
                    user_id: parseInt(this.state.loggedInUser),
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
                        return <Comment comment={comment} i={i} key={i}/>
                    }) : null}
            </div>
        );
    }
}

export default CommentForm;