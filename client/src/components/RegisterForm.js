import React, { Component } from 'react';
import axios from 'axios';

class RegisterForm extends Component {
  
  registerSubmit = (e) => {
    e.preventDefault();
    fetch('/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: {
          first_name: e.target.firstName.value,
          last_name: e.target.lastName.value,
          email: e.target.email.value,
          password: e.target.password.value,
          country: e.target.country.value,
          city: e.target.city.value,
          //postcode: e.target.postcode.value,
          username: e.target.username.value

        }
      })
    }).catch(err => console.log(err));
  }

  render() { 
    return (
      <form onSubmit={(e) => this.registerSubmit(e)}>
        <h3>Create Profile *required fields</h3>
        {/* <label>Title (optional):</label>
        <select>
          <option value="placeholder">Please select title</option>
          <option value="Mr">Mr</option>
          <option value="Mrs">Mrs</option>
          <option value="Ms">Ms</option>
          <option value="Dr">Dr</option>
        </select> */}
        <label>First Name:*</label>
        <input type="text" name="firstName" />
        {/* <label>Middle Initial (optional):</label>
        <input type="text" name="middleInitial" /> */}
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
        <label>postcode</label>
        <input type="text" name="postcode" />
        <label>city</label>
        <input type="text" name="city" />
        <label>username</label>
        <input type="text" name="username" />
        <input type="submit" value="Register" name="register" />
      </form>
    )
  }
}

export default RegisterForm;