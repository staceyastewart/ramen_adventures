import React, { Component } from 'react';
import axios from 'axios';

class Comments extends Component {

    constructor(props) {
    super(props);

        this.state = {
            comments: ''
        }

        this.handleCommentsSubmit = this.handleCommentsSubmit.bind(this);
        this.handleCommentChange = this.handleCommentChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.keyPress = this.keyPress.bind(this);
        this.postCommentData = this.postCommentData.bind(this);
    }

    handleCommentsSubmit(e) {
        e.preventDefault();
    }

    handleCommentChange(event){
        this.setState({ comments: event.target.value })
    }

    handleClick(){
        this.postCommentData();
        this.setState({ comments: '' });
    }

    keyPress(e){
    if (e.charCode === 13) {
      this.handleClick(e);
    }
  }

  postCommentData(){
      axios.post('/comments', {
          comment: { 
            content: this.state.comments,
            user_id: this.props.id }
      }).then(response => console.log(response))
        .catch(error => console.log(error));
      
  }


    render() {
        return (
            <div>
                <form onSubmit={this.handleCommentsSubmit}>
                    <label>Comment:</label>
                    <textarea   cols="30" rows="10"
                                value={this.state.comments}
                                onChange={this.handleCommentChange}
                                placeholder="Comment Here"
                                onKeyPress={(e) => this.keyPress(e)}
                    >                       
                    </textarea>
                    <input  type="submit"
                            value="Submit"
                            onClick={(e) => this.handleClick(e)}
                    />
                </form>
            </div>
        );
    }
}

export default Comments;