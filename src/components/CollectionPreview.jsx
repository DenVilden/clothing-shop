import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import CollectionItem from '../containers/CollectionItem';

const CollectionPreview = ({
  history,
  match,
  collection: { title, items, routeName },
}) => (
  <CollectionPreviewContainer>
    <TitleContainer
      onClick={() => history.push(`${match.url}/${routeName}`)}
      onKeyPress={() => history.push(`${match.url}/${routeName}`)}
      role="button"
      tabIndex="0"
    >
      {title}
    </TitleContainer>
    <PreviewContainer>
      {items
        .filter((item, index) => index < 4)
        .map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </PreviewContainer>
  </CollectionPreviewContainer>
);

CollectionPreview.propTypes = {
  collection: PropTypes.shape({
    title: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        imageUrl: PropTypes.string,
        price: PropTypes.number,
      })
    ).isRequired,
    routeName: PropTypes.string.isRequired,
  }).isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default withRouter(CollectionPreview);

// STYLES
const CollectionPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;

  @media (max-width: 800px) {
    align-items: center;
  }
`;

const TitleContainer = styled.h1`
  cursor: pointer;
  font-size: 28px;
  margin-bottom: 25px;
  text-transform: uppercase;

  &:hover {
    color: grey;
  }
`;

const PreviewContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 800px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 15px;
  }
`;
