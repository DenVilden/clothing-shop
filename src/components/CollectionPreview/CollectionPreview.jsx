import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import {
  CollectionPreviewContainer,
  TitleContainer,
  PreviewContainer,
} from './CollectionPreview.styles';
import CollectionItem from '../CollectionItem/CollectionItem.container';

const CollectionPreview = ({
  history,
  match,
  collection: { title, items, routeName },
}) => {
  const goTo = () => history.push(`${match.url}/${routeName}`);

  return (
    <CollectionPreviewContainer>
      <TitleContainer
        onClick={goTo}
        onKeyPress={goTo}
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
};

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
