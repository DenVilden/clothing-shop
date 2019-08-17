import React from 'react';
import PropTypes from 'prop-types';
import { CustomButtonContainer } from './CustomButton.styles';

const CustomButton = ({
  children,
  isGoogleSignIn,
  onClick,
  type,
  className,
  inverted,
}) => (
  <CustomButtonContainer
    isGoogleSignIn={isGoogleSignIn}
    onClick={onClick}
    type={type}
    className={className}
    inverted={inverted}
  >
    {children}
  </CustomButtonContainer>
);

CustomButton.defaultProps = {
  type: 'button',
  isGoogleSignIn: undefined,
  onClick: undefined,
  inverted: false,
};

CustomButton.propTypes = {
  children: PropTypes.string.isRequired,
  isGoogleSignIn: PropTypes.bool,
  onClick: PropTypes.func,
  type: PropTypes.string,
  className: PropTypes.string.isRequired,
  inverted: PropTypes.bool,
};

export default CustomButton;
