import React, { Component } from 'react';
import moment from 'moment';

class BlogPost extends Component {
    render() {
        const { contentToDisplay, photoToDisplay, dateToDisplay } = this.props;
        return (
            <div>
                <img src={photoToDisplay} alt="" />
                <div>{moment(dateToDisplay).format('dddd, MMMM Do, YYYY')}</div>
                <div>{contentToDisplay}</div>
            </div>
        );
    }
}

export default BlogPost;