import React from 'react';
import styled from 'styled-components';
import SignIn from '../components/SignIn/SignIn.container';
import SignUp from '../components/SignUp/SignUp.container';

const SignInAndSignUpPage = () => (
  <SignInAndSignUpContainer>
    <SignIn />
    <SignUp />
  </SignInAndSignUpContainer>
);

export default SignInAndSignUpPage;

/* STYLES */
const SignInAndSignUpContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 30px auto;
  width: 850px;

  @media (max-width: 900px) {
    align-items: center;
    flex-direction: column;
    width: auto;
  }
`;
