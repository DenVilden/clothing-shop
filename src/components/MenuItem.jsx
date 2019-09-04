import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

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

// STYLES
const MenuItemContainer = styled.div`
	align-items: center;
	border: 1px solid black;
	display: flex;
	flex: 1 1 auto;
	height: ${({ size }) => (size ? '380px' : '240px')}
	justify-content: center;
	margin: 0 7.5px 15px;
	min-width: 30%;
	overflow: hidden;

  @media (max-width: 800px) {
    height: 200px;
  } 
  
	&:hover {
    cursor: pointer;
    
		& .background-image {
			transform: scale(1.1);
			transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
		}
		& .content {
			opacity: 0.9;
		}
  }
  
	&:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }
`;

const BackgroundImageContainer = styled.div`
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  background-position: center;
  background-size: cover;
  height: 100%;
  width: 100%;
`;

const ContentContainer = styled.div`
  align-items: center;
  background-color: white;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  height: 90px;
  justify-content: center;
  opacity: 0.7;
  padding: 0 25px;
  position: absolute;
`;

const ContentTitle = styled.span`
  color: #4a4a4a;
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 6px;
  text-transform: uppercase;
`;

const ContentSubtitle = styled.span`
  font-size: 16px;
  font-weight: lighter;
`;
