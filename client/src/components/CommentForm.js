import React, { Component } from 'react';
import axios from 'axios';

class CommentForm extends Component {
    constructor() {
        super();
        const userId = localStorage.getItem('id');
        this.state = { userId, comments: [] }
        this.submitComment = this.submitComment.bind(this);
        this.getComments = this.getComments.bind(this);
    }

    componentDidMount() {
        this.getComments();
    }

    getComments() {
        axios.get(`/posts/${this.props.blogId}/comments`)
        .then(response => {
            console.log(response);
            this.setState({ comments: response.data })
        })
    }

    submitComment(e) { 
        e.preventDefault();
        axios.post(`/posts/${this.props.blogId}/comments`, { 
            comment: { 
                content: e.target.comment.value, 
                user_id: parseInt(this.state.userId),
                post_id: this.props.blogId
            }
        });
    }
   
    render() {
        return (
            <div>
                <h1>Leave a Comment</h1>
                <form onSubmit={this.submitComment}>
                    <input type="text" name="comment" />
                </form>
                <h2>Comments:</h2> 
                {this.state.comments ? 
                this.state.comments.map((comment, i) => {
                    return <li key={i}>{comment.content}</li>
                }) : null}          
            </div>
        );
    }
}

export default CommentForm;