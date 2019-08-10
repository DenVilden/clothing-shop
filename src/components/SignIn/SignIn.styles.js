import styled from 'styled-components';

export const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;

  @media (max-width: 900px) {
    margin-bottom: 100px;
    width: 480px;
  }

  @media (max-width: 500px) {
    width: auto;
  }
`;

export const SignInTitle = styled.h2`
  margin: 10px 0;
`;

export const ButtonsBarContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 900px) {
    justify-content: flex-start;

    button {
      margin-right: 20px;
    }
  }

  @media (max-width: 500px) {
    flex-direction: column;

    button {
      margin-bottom: 10px;
    }
  }
`;
