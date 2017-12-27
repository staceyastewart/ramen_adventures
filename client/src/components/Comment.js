import React, { Component } from 'react';
import axios from 'axios';

class Comment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            commenterId: this.props.comment.user_id
        }
        this.getCommenterName = this.getCommenterName.bind(this);
    }

    componentDidMount() {
        this.getCommenterName();
    }

    getCommenterName() {
        let id = this.state.commenterId;
        axios.get(`/users/${id}`)
        .then(response => {
            console.log(response)
        })
    }
    render() {
        let { i, comment } = this.props;
        return (
            <div>
                <div>{comment.content}</div>
            </div>
        );
    }
}

export default Comment;