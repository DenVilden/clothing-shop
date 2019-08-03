import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import {
  CollectionPreviewContainer,
  TitleContainer,
  PreviewContainer
} from './CollectionPreview.styles';
import CollectionItemContainer from '../CollectionItem/CollectionItem.container';

const CollectionPreview = ({ title, items, routeName, history, match }) => (
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
          <CollectionItemContainer key={item.id} item={item} />
        ))}
    </PreviewContainer>
  </CollectionPreviewContainer>
);

CollectionPreview.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      imageUrl: PropTypes.string,
      price: PropTypes.number
    })
  ).isRequired,
  routeName: PropTypes.string.isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  match: PropTypes.objectOf(PropTypes.any).isRequired
};

export default withRouter(CollectionPreview);
