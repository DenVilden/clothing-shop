import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import FormInput from './FormInput';
import CustomButton from './CustomButton';

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

/* STYLES */
const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;

  @media (max-width: 900px) {
    margin-bottom: 100px;
    width: 480px;
  }

  @media (max-width: 500px) {
    width: auto;
  }
`;

const SignInTitle = styled.h2`
  margin: 10px 0;
`;

const ButtonsBarContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 900px) {
    justify-content: flex-start;

    button {
      margin-right: 20px;
    }
  }

  @media (max-width: 500px) {
    flex-direction: column;

    button {
      margin-bottom: 10px;
    }
  }
`;
