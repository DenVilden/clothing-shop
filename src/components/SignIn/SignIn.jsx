import React, { Component } from 'react';
import {
  SignInContainer,
  SignInTitle,
  ButtonsBarContainer
} from './SignIn.styles';
import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';
import { auth, signInWithGoogle } from '../../api/firebase';

export default class SignIn extends Component {
  state = { email: '', password: '' };

  handleSubmit = async evt => {
    evt.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: '' });
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
    }
  };

  handleChange = evt => {
    const { value, name } = evt.target;
    this.setState({ [name]: value });
  };

  render() {
    const { email, password } = this.state;

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
              onClick={signInWithGoogle}
              type="submit"
            >
              Sign in with Google
            </CustomButton>
          </ButtonsBarContainer>
        </form>
      </SignInContainer>
    );
  }
}
