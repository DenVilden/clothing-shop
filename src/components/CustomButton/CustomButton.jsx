import React from 'react';
import PropTypes from 'prop-types';
import { CustomButtonContainer } from './CustomButton.styles';

const propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.string,
};

const defaultProps = {
  type: 'button',
};

const CustomButton = ({ children, ...otherProps }) => (
  <CustomButtonContainer {...otherProps}>{children}</CustomButtonContainer>
);

CustomButton.propTypes = propTypes;
CustomButton.defaultProps = defaultProps;

export default CustomButton;
