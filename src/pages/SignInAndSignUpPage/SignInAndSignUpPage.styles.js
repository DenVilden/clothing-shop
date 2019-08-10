/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const SignInAndSignUpContainer = styled.div`
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
