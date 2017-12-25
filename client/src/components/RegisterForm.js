import React, { Component } from 'react';
import 'icheck/skins/all.css';
import { Checkbox } from 'react-icheck';
import SignInMessage from './SignInMessage';

class RegisterForm extends Component {

  render() {
    return (
      <div>
        <form onSubmit={(e) => this.props.registerSubmit(e)}  className="register-contain">
          <div className="create">
            <p className="create-profile">Create Profile</p>
            <p className="required">*required fields</p>
          </div>
          <div className="form-field">
            <div className="label">
              <label>First Name:*</label>
            </div>
            <div className="input">
                <input type="text" name="firstName" className="input-field first-name" />
            </div>
          </div>
          <div className="form-field">
            <div className="label">
              <label>Last Name:*</label>
            </div>
            <div className="input">
              <input type="text" name="lastName" className="input-field last-name" />
            </div>
          </div>
          <div className="form-field">
            <div className="label">
              <label>Email:*</label>
            </div>
            <div className="input">
              <input type="email" name="email" defaultValue={this.props.email} className="input-field email" />
            </div>
          </div>
          <div className="form-field">
            <div className="label">
              <label>Create <br className="register-br-mobile" />Password:* <br/>(5-16 characters)</label>
            </div>
            <div className="input">
              <input type="password" name="password" className="input-field password" />
            </div>
            </div>
          <div className="form-field subscribe-wrapper">
            <div className="label">
              <label>Click here to receive updates</label>
            </div>
            <div className="input">
            <Checkbox
                checkboxClass="icheckbox_square-red"
                className="checkbox"
                increaseArea="20%" 
                name="subscribed"
                defaultChecked={true}
            />
            </div>
          </div>
          <div className="form-field submit-contain">
            <input type="submit" value="Register" name="register" className="register" />
          </div>
        </form>
        {this.props.showRegisterSuccessMsg ? <SignInMessage resetRegisterSuccesMsg={this.props.resetRegisterSuccesMsg} /> : null}
      </div>
    )
  }
}

export default RegisterForm;
