import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import {
  CollectionPreviewContainer,
  TitleContainer,
  PreviewContainer,
} from './CollectionPreview.styles';
import CollectionItem from '../CollectionItem/CollectionItem';

const propTypes = {
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
  history: PropTypes.shape({ push: PropTypes.func }).isRequired,
  match: PropTypes.shape({ url: PropTypes.string }).isRequired,
};

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

CollectionPreview.propTypes = propTypes;

export default withRouter(CollectionPreview);
