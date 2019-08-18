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

const MenuItem = ({
  history,
  match,
  section: { title, imageUrl, linkUrl, size },
}) => (
  <MenuItemContainer
    onClick={() => history.push(`${match.url}${linkUrl}`)}
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

MenuItem.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  match: PropTypes.objectOf(PropTypes.any).isRequired,
  section: PropTypes.shape({
    title: PropTypes.string,
    imageUrl: PropTypes.string,
    linkUrl: PropTypes.string,
    size: PropTypes.string,
  }).isRequired,
};

export default withRouter(MenuItem);
