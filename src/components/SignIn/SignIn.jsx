import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  SignInContainer,
  SignInTitle,
  ButtonsBarContainer,
} from './SignIn.styles';
import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';
import {
  googleSignInStartAction,
  emailSignInStartAction,
} from '../../store/actions/user.actions';

const SignIn = () => {
  const dispatch = useDispatch();
  const [userCredentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const { email, password } = userCredentials;

  const handleSubmit = evt => {
    evt.preventDefault();
    dispatch(emailSignInStartAction({ email, password }));
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
          <CustomButton
            isGoogleSignIn
            onClick={() => dispatch(googleSignInStartAction())}
          >
            Sign in with Google
          </CustomButton>
        </ButtonsBarContainer>
      </form>
    </SignInContainer>
  );
};

export default SignIn;
