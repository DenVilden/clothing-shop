import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  SignInContainer,
  SignInTitle,
  ButtonsBarContainer
} from './SignIn.styles';
import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';

export default class SignIn extends Component {
  static propTypes = {
    googleSignInStart: PropTypes.func.isRequired,
    emailSignInStart: PropTypes.func.isRequired
  };

  state = { email: '', password: '' };

  handleSubmit = async evt => {
    evt.preventDefault();

    const { email, password } = this.state;
    const { emailSignInStart } = this.props;
    emailSignInStart(email, password);
  };

  handleChange = evt => {
    const { value, name } = evt.target;
    this.setState({ [name]: value });
  };

  render() {
    const { email, password } = this.state;
    const { googleSignInStart } = this.props;

    return (
      <SignInContainer>
        <SignInTitle>I already have an account</SignInTitle>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            handleChange={this.handleChange}
            label="Email"
            name="email"
            required
            type="email"
            value={email}
          />
          <FormInput
            handleChange={this.handleChange}
            label="Password"
            name="password"
            required
            type="password"
            value={password}
          />
          <ButtonsBarContainer>
            <CustomButton type="submit">Sign in</CustomButton>
            <CustomButton
              isGoogleSignIn
              onClick={googleSignInStart}
              type="button"
            >
              Sign in with Google
            </CustomButton>
          </ButtonsBarContainer>
        </form>
      </SignInContainer>
    );
  }
}
