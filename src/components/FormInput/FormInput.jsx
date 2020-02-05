import React from 'react';
import PropTypes from 'prop-types';
import {
  GroupContainer,
  FormInputContainer,
  FormInputLabel,
} from './FormInput.styles';

const propTypes = {
  label: PropTypes.string.isRequired,
};

const FormInput = ({ label, ...otherProps }) => (
  <GroupContainer>
    <FormInputContainer id={label} {...otherProps} />
    <FormInputLabel htmlFor={label}>{label}</FormInputLabel>
  </GroupContainer>
);

FormInput.propTypes = propTypes;

export default FormInput;
