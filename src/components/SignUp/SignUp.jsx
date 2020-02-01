import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { SignUpContainer, SignUpTitle } from './SignUp.styles';
import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';
import { signUpStartAction } from '../../store/actions/user.actions';

const SignUp = () => {
  const dispatch = useDispatch();
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
      dispatch(signUpStartAction({ email, password, displayName }));
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

export default SignUp;
