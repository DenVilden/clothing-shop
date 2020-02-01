import React from 'react';
import { SignInAndSignUpContainer } from './SignInAndSignUpPage.styles';
import SignIn from '../../components/SignIn/SignIn.container';
import SignUp from '../../components/SignUp/SignUp.container';

const SignInAndSignUpPage = () => (
  <SignInAndSignUpContainer>
    <SignIn />
    <SignUp />
  </SignInAndSignUpContainer>
);

export default SignInAndSignUpPage;
