import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { SignUpContainer, SignUpTitle } from './SignUp.styles';
import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';

export default class SignUp extends Component {
  static propTypes = {
    signUpStart: PropTypes.func.isRequired
  };

  state = { displayName: '', email: '', password: '', confirmPassword: '' };

  handleSubmit = evt => {
    evt.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;
    const { signUpStart } = this.props;

    if (password !== confirmPassword) {
      // eslint-disable-next-line no-alert
      alert("passwords don't match");
    } else {
      signUpStart(email, password, displayName);
    }
  };

  handleChange = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;

    return (
      <SignUpContainer>
        <SignUpTitle>I do not have an account</SignUpTitle>
        <span>Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            label="Display Name"
            name="displayName"
            onChange={this.handleChange}
            required
            type="text"
            value={displayName}
          />
          <FormInput
            label="Provide Email"
            name="email"
            onChange={this.handleChange}
            required
            type="email"
            value={email}
          />
          <FormInput
            label="Provide Password"
            name="password"
            onChange={this.handleChange}
            required
            type="password"
            value={password}
          />
          <FormInput
            label="Confirm Password"
            name="confirmPassword"
            onChange={this.handleChange}
            required
            type="password"
            value={confirmPassword}
          />
          <CustomButton type="submit">SIGN UP</CustomButton>
        </form>
      </SignUpContainer>
    );
  }
}
