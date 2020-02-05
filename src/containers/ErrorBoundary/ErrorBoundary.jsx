import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  ErrorImageOverlay,
  ErrorImageContainer,
  ErrorImageText,
} from './ErrorBoundary.styles';

export default class ErrorBoundary extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  state = { hasError: false };

  static getDerivedStateFromError = () => ({ hasError: true });

  componentDidCatch(error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    return hasError ? (
      <ErrorImageOverlay>
        <ErrorImageContainer imageUrl="https://i.imgur.com/yW2W9SC.png" />
        <ErrorImageText>Error: something went wrong</ErrorImageText>
      </ErrorImageOverlay>
    ) : (
      children
    );
  }
}
