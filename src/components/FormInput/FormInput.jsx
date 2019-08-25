import React from 'react';
import PropTypes from 'prop-types';
import {
  GroupContainer,
  FormInputContainer,
  FormInputLabel,
} from './FormInput.styles';

const FormInput = ({ label, ...otherProps }) => (
  <GroupContainer>
    <FormInputContainer id={label} {...otherProps} />
    <FormInputLabel htmlFor={label}>{label}</FormInputLabel>
  </GroupContainer>
);

FormInput.propTypes = {
  label: PropTypes.string.isRequired,
};

export default FormInput;
