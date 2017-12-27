import React, { Component } from 'react';
import axios from 'axios';

class Profile extends Component {
    constructor() {
        super();
        const loggedInUser = localStorage.getItem('id');
        this.state = { loggedInUser };
        this.getUserData = this.getUserData.bind(this);
    }

    componentDidMount() {
        this.getUserData();
    }
    
    getUserData() {
        const id = this.state.loggedInUser;
        axios.get(`/users/${id}`)
        .then(res => {
            console.log(res)
        })
    }

    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default Profile;