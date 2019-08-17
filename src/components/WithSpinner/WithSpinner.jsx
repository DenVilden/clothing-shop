/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import Spinner from '../Spinner/Spinner';

export default WrappedComponent => {
  const hocComponent = ({ loading, ...props }) => {
    return loading ? <Spinner /> : <WrappedComponent {...props} />;
  };

  hocComponent.propTypes = {
    loading: PropTypes.bool.isRequired,
  };

  return hocComponent;
};
