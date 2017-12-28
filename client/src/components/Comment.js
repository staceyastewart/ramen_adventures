import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';

class Comment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            commenterId: this.props.comment.user_id,
            firstName: '',
            lastName: '',
            timeOfPost: ''
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
            this.setState({
                firstName: response.data.first_name,
                lastName: response.data.last_name,
                timeOfPost: response.data.created_at
            })
        })
    }

    render() {
        let { comment } = this.props;
        return (
            <div>
                <div>{this.state.firstName} {this.state.lastName} {this.state.timeOfPost}</div>
                <div>{comment.content}</div>
            </div>
        );
    }
}

export default Comment;