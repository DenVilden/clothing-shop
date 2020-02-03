import styled, { css } from 'styled-components';

const buttonStyles = css`
  background-color: #000;
  border: 0;
  color: #fff;

  &:hover {
    background-color: #fff;
    border: 1px solid #000;
    color: #000;
  }
`;

const invertedButtonStyles = css`
  background-color: #fff;
  border: 1px solid #000;
  color: #000;

  &:hover {
    background-color: #000;
    border: 0;
    color: #fff;
  }
`;

const googleSignInStyles = css`
  background-color: #4285f4;
  border: 0;
  color: #fff;

  &:hover {
    background-color: #fff;
    border: 1px solid #357ae8;
    color: #357ae8;
  }
`;

const getButtonStyles = ({ isGoogleSignIn, inverted }) => {
  if (isGoogleSignIn) {
    return googleSignInStyles;
  }

  return inverted ? invertedButtonStyles : buttonStyles;
};

// eslint-disable-next-line import/prefer-default-export
export const CustomButtonContainer = styled.button`
  cursor: pointer;
  display: flex;
  font-family: 'Open Sans Condensed';
  font-size: 15px;
  font-weight: bolder;
  height: 50px;
  justify-content: center;
  letter-spacing: 0.5px;
  line-height: 50px;
  min-width: 165px;
  padding: 0 35px;
  text-transform: uppercase;
  width: auto;

  ${getButtonStyles};
`;
