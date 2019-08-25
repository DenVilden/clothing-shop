import React from 'react';
import PropTypes from 'prop-types';
import { CustomButtonContainer } from './CustomButton.styles';

const CustomButton = ({ children, ...otherProps }) => (
  <CustomButtonContainer {...otherProps}>{children}</CustomButtonContainer>
);

CustomButton.defaultProps = {
  type: 'button',
};

CustomButton.propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default CustomButton;
