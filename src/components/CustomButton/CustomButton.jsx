import React from 'react';
import PropTypes from 'prop-types';
import { CustomButtonContainer } from './CustomButton.styles';

const CustomButton = ({ children, ...props }) => (
  <CustomButtonContainer type="button" {...props}>
    {children}
  </CustomButtonContainer>
);

CustomButton.propTypes = {
  children: PropTypes.string.isRequired
};

export default CustomButton;
