import React from 'react';
import PropTypes from 'prop-types';
import {
  GroupContainer,
  FormInputContainer,
  FormInputLabel,
} from './FormInput.styles';

const FormInput = ({ handleChange, label, value, name, required, type }) => (
  <GroupContainer>
    <FormInputContainer
      id={label}
      onChange={handleChange}
      value={value}
      name={name}
      require={required}
      type={type}
    />
    <FormInputLabel htmlFor={label}>{label}</FormInputLabel>
  </GroupContainer>
);

FormInput.propTypes = {
  handleChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  required: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired,
};

export default FormInput;
