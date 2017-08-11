import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions';

class RegisterForm extends Component {

  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    return (
      <form onSubmit={(e) => this.props.registerSubmit(e)}>
        <h3>Create Profile *required fields</h3>
        <label>First Name:*</label>
        <input type="text" name="firstName" />
        <label>Last Name:*</label>
        <input type="text" name="lastName" />
        <label>Email:*</label>
        <input type="email" name="email" />
        <label>Create Password:* (5-16 characters)</label>
        <input type="password" name="password" />
        <label>city</label>
        <input type="submit" value="Register" name="register" />
      </form>
    )
  }
}

function mapStateToProps(state) {
  return { users: state.users };
}

export default connect(mapStateToProps, { fetchUsers })(RegisterForm);
