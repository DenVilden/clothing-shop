import React from 'react';
import PropTypes from 'prop-types';
import { SpinnerOverlay, SpinnerContainer } from './WithSpinner.styles';

export default WrappedComponent => {
  const hocComponent = ({ loading, ...props }) =>
    loading ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
      <WrappedComponent {...props} />
    );

  hocComponent.propTypes = {
    loading: PropTypes.bool.isRequired
  };

  return hocComponent;
};
