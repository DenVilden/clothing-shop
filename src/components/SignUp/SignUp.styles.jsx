import styled from 'styled-components';

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;

  @media (max-width: 900px) {
    width: 480px;
  }

  @media (max-width: 500px) {
    width: auto;
  }
`;

export const SignUpTitle = styled.h2`
  margin: 10px 0;
`;
