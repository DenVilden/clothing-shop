import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  SignInContainer,
  SignInTitle,
  ButtonsBarContainer,
} from './SignIn.styles';
import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';

const SignIn = ({ googleSignInStart, emailSignInStart }) => {
  const [userCredentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const { email, password } = userCredentials;

  const handleSubmit = evt => {
    evt.preventDefault();
    emailSignInStart(email, password);
  };

  const handleChange = evt => {
    const { value, name } = evt.target;
    setCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <SignInContainer>
      <SignInTitle>I already have an account</SignInTitle>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          name="email"
          onChange={handleChange}
          required
          type="email"
          value={email}
        />
        <FormInput
          label="Password"
          name="password"
          onChange={handleChange}
          required
          type="password"
          value={password}
        />
        <ButtonsBarContainer>
          <CustomButton type="submit">Sign in</CustomButton>
          <CustomButton isGoogleSignIn onClick={googleSignInStart}>
            Sign in with Google
          </CustomButton>
        </ButtonsBarContainer>
      </form>
    </SignInContainer>
  );
};

SignIn.propTypes = {
  googleSignInStart: PropTypes.func.isRequired,
  emailSignInStart: PropTypes.func.isRequired,
};

export default SignIn;
