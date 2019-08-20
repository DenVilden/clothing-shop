import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { SignUpContainer, SignUpTitle } from './SignUp.styles';
import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';

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
          handleChange={handleChange}
          required
          type="text"
          value={displayName}
        />
        <FormInput
          label="Provide Email"
          name="email"
          handleChange={handleChange}
          required
          type="email"
          value={email}
        />
        <FormInput
          label="Provide Password"
          name="password"
          handleChange={handleChange}
          required
          type="password"
          value={password}
        />
        <FormInput
          label="Confirm Password"
          name="confirmPassword"
          handleChange={handleChange}
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
