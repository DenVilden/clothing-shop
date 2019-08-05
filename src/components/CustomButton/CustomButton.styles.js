/* eslint-disable import/prefer-default-export */
import styled, { css } from 'styled-components';

const buttonStyles = css`
  background-color: black;
  border: none;
  color: white;

  &:hover {
    background-color: white;
    border: 1px solid black;
    color: black;
  }
`;

const invertedButtonStyles = css`
  background-color: white;
  border: 1px solid black;
  color: black;

  &:hover {
    background-color: black;
    border: none;
    color: white;
  }
`;

const googleSignInStyles = css`
  background-color: #4285f4;
  color: white;

  &:hover {
    background-color: #357ae8;
    border: none;
  }
`;

const getButtonStyles = ({ isGoogleSignIn, inverted }) => {
  if (isGoogleSignIn) {
    return googleSignInStyles;
  }

  return inverted ? invertedButtonStyles : buttonStyles;
};

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
  padding: 0 35px 0 35px;
  text-transform: uppercase;
  width: auto;

  ${getButtonStyles}
`;
