import React, { Component } from 'react';
import axios from 'axios';

class RegisterForm extends Component {

  registerSubmit = (e) => {
    e.preventDefault();
    axios.post('/users', {
      first_name: e.target.firstName.value,
      last_name: e.target.lastName.value,
      email: e.target.email.value,
      password: e.target.password.value,
      country: e.target.country.value,
      city: e.target.city.value,
      username: e.target.username.value
    }).catch(err => console.log(err));
  }

  render() {
    return (
      <form onSubmit={(e) => this.registerSubmit(e)}>
        <h3>Create Profile *required fields</h3>
        <label>First Name:*</label>
        <input type="text" name="firstName" />
        <label>Last Name:*</label>
        <input type="text" name="lastName" />
        <label>Country:*</label>
        <select name="country">
          <option value="placeholder">Please Select</option>
          <option value="USA">United States</option>
          <option value="Japan">Japan</option>
        </select>
        <label>Email:*</label>
        <input type="email" name="email" />
        <label>Create Password:* (5-16 characters)</label>
        <input type="password" name="password" />
        <label>Verify Password:*</label>
        <input type="password" name="password" />
        <label>city</label>
        <input type="text" name="city" />
        <label>country</label>
        <input type="text" name="country" />
        <label>username</label>
        <input type="text" name="username" />
        <input type="submit" value="Register" name="register" />
      </form>
    )
  }
}

export default RegisterForm;
