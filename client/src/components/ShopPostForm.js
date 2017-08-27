import React, { Component } from 'react';
import axios from 'axios';

class ShopPostForm extends Component {
  constructor() {
    super();
    this.shopSubmit = this.shopSubmit.bind(this);
  }

  shopSubmit(e){
    e.preventDefault();
    axios.post('/shops', {
      shop: {
        name: e.target.name.value,
        recommended: e.target.recommended.value,
        address: e.target.address.value,
      }
    })
    .then(response => console.log(response))
    .catch(error => console.log(error));
  }

  render() {
    return (
      <form onSubmit={(e) => this.shopSubmit(e)}>
        <h3>Create Profile *required fields</h3>
        {/* <label>Title (optional):</label>
        <select>
          <option value="placeholder">Please select title</option>
          <option value="Mr">Mr</option>
          <option value="Mrs">Mrs</option>
          <option value="Ms">Ms</option>
          <option value="Dr">Dr</option>
        </select> */}
        <label>Name:*</label>
        <input type="text" name="name" />
        {/* <label>Middle Initial (optional):</label>
        <input type="text" name="middleInitial" /> */}
        <label>Address:*</label>
        <input type="text" name="address" />
        <label>Recommended:*</label>
        <input type="text" name="recommended" />
        <input type="submit" value="Register" name="register" />
      </form>
    )
  }
}

export default ShopPostForm;
