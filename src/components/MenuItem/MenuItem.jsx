import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import {
  MenuItemContainer,
  BackgroundImageContainer,
  ContentContainer,
  ContentTitle,
  ContentSubtitle,
} from './MenuItem.styles';

const MenuItem = ({ title, imageUrl, linkUrl, size, history, match }) => {
  const goTo = useCallback(() => {
    history.push(`${match.url}${linkUrl}`);
  }, [history, linkUrl, match.url]);

  return (
    <MenuItemContainer
      onClick={goTo}
      onKeyPress={goTo}
      role="button"
      size={size}
      tabIndex="0"
    >
      <BackgroundImageContainer
        className="background-image"
        imageUrl={imageUrl}
      />
      <ContentContainer className="content">
        <ContentTitle>{title}</ContentTitle>
        <ContentSubtitle>SHOP NOW</ContentSubtitle>
      </ContentContainer>
    </MenuItemContainer>
  );
};

MenuItem.defaultProps = {
  size: undefined,
};

MenuItem.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  match: PropTypes.objectOf(PropTypes.any).isRequired,
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  linkUrl: PropTypes.string.isRequired,
  size: PropTypes.string,
};

export default withRouter(MenuItem);
