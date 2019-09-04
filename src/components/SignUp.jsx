import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import FormInput from './FormInput';
import CustomButton from './CustomButton';

const SignUp = ({ signUpStart }) => {
  const [userCredentials, setCredentials] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const { displayName, email, password, confirmPassword } = userCredentials;

  const handleSubmit = evt => {
    evt.preventDefault();
    if (password !== confirmPassword) {
      // eslint-disable-next-line no-alert
      alert("passwords don't match");
    } else {
      signUpStart(email, password, displayName);
    }
  };

  const handleChange = evt => {
    const { name, value } = evt.target;
    setCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <SignUpContainer>
      <SignUpTitle>I do not have an account</SignUpTitle>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          name="displayName"
          onChange={handleChange}
          required
          type="text"
          value={displayName}
        />
        <FormInput
          label="Provide Email"
          name="email"
          onChange={handleChange}
          required
          type="email"
          value={email}
        />
        <FormInput
          label="Provide Password"
          name="password"
          onChange={handleChange}
          required
          type="password"
          value={password}
        />
        <FormInput
          label="Confirm Password"
          name="confirmPassword"
          onChange={handleChange}
          required
          type="password"
          value={confirmPassword}
        />
        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </SignUpContainer>
  );
};

SignUp.propTypes = {
  signUpStart: PropTypes.func.isRequired,
};

export default SignUp;

// STYLES
const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;

  @media (max-width: 900px) {
    width: 480px;
  }

  @media (max-width: 500px) {
    width: auto;
  }
`;

const SignUpTitle = styled.h2`
  margin: 10px 0;
`;
