import React from 'react';
import PropTypes from 'prop-types';
import {
  GroupContainer,
  FormInputContainer,
  FormInputLabel
} from './FormInput.styles';

const FormInput = ({ handleChange, label, value, ...props }) => (
  <GroupContainer>
    <FormInputContainer
      id={label}
      onChange={handleChange}
      value={value}
      {...props}
    />
    <FormInputLabel htmlFor={label}>{label}</FormInputLabel>
  </GroupContainer>
);

FormInput.defaultProps = {
  handleChange: null
};

FormInput.propTypes = {
  handleChange: PropTypes.func,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
};

export default FormInput;
