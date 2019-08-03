import React from 'react';
import PropTypes from 'prop-types';
import { SpinnerOverlay, SpinnerContainer } from './WithSpinner.styles';

const WithSpinner = WrappedComponent => {
  const Wrapped = ({ loading, ...props }) =>
    loading ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
      <WrappedComponent {...props} />
    );

  Wrapped.propTypes = {
    loading: PropTypes.bool.isRequired
  };

  return Wrapped;
};

export default WithSpinner;
