import React, { Component } from 'react';
import axios from 'axios';

class BestOf extends Component {

    // componentDidMount() {
    //     this.getBestOfs();
    // }

    getBestOfs() {
        axios.get('/posts')
        .then(res => {
            res.data.map(post => {
                console.log(post.best_of);
            })
            
        })
    }
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default BestOf;