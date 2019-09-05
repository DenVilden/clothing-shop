import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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

/* STYLES */
const ErrorImageOverlay = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 60vh;
  justify-content: center;
  width: 100%;
`;

const ErrorImageContainer = styled.div`
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  background-position: center;
  background-size: cover;
  display: inline-block;
  height: 40vh;
  width: 40vh;
`;

const ErrorImageText = styled.h2`
  color: #2f8e89;
  font-size: 28px;
`;
