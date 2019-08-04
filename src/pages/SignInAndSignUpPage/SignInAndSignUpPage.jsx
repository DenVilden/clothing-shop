import React from 'react';
import { SignInAndSignUpContainer } from './SignInAndSignUpPage.styles';
import SignInContainer from '../../components/SignIn/SignIn.container';
import SignUp from '../../components/SignUp/SignUp';

const SignInAndSignUpPage = () => (
  <SignInAndSignUpContainer>
    <SignInContainer />
    <SignUp />
  </SignInAndSignUpContainer>
);

export default SignInAndSignUpPage;
