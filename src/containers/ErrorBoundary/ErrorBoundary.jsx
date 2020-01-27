import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  ErrorImageOverlay,
  ErrorImageContainer,
  ErrorImageText,
} from './ErrorBoundary.styles';

export default class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      return (
        <ErrorImageOverlay>
          <ErrorImageContainer imageUrl="https://i.imgur.com/yW2W9SC.png" />
          <ErrorImageText>Error: something went wrong</ErrorImageText>
        </ErrorImageOverlay>
      );
    }

    return children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.objectOf(PropTypes.any).isRequired,
};
