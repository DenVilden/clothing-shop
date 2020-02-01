import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
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
