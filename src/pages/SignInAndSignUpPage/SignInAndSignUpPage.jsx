import React from 'react';
import { SignInAndSignUpContainer } from './SignInAndSignUpPage.styles';
import SignInContainer from '../../components/SignIn/SignIn.container';
import SignUpContainer from '../../components/SignUp/SignUp.container';

const SignInAndSignUpPage = () => (
  <SignInAndSignUpContainer>
    <SignInContainer />
    <SignUpContainer />
  </SignInAndSignUpContainer>
);

export default SignInAndSignUpPage;
