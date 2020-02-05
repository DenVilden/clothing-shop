import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import {
  MenuItemContainer,
  BackgroundImageContainer,
  ContentContainer,
  ContentTitle,
  ContentSubtitle,
} from './MenuItem.styles';

const propTypes = {
  history: PropTypes.shape({ push: PropTypes.func }).isRequired,
  match: PropTypes.shape({ url: PropTypes.string }).isRequired,
  section: PropTypes.shape({
    title: PropTypes.string,
    imageUrl: PropTypes.string,
    linkUrl: PropTypes.string,
    size: PropTypes.string,
  }).isRequired,
};

const MenuItem = ({
  history,
  match,
  section: { title, imageUrl, linkUrl, size },
}) => (
  <MenuItemContainer
    onClick={() => history.push(`${match.url}${linkUrl}`)}
    onKeyPress={() => history.push(`${match.url}${linkUrl}`)}
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

MenuItem.propTypes = propTypes;

export default withRouter(MenuItem);
