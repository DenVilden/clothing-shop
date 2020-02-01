import React from 'react';
import PropTypes from 'prop-types';
import {
  CollectionPageContainer,
  CollectionTitle,
  CollectionItemsContainer,
} from './CollectionPage.styles';
import CollectionItem from '../../../components/CollectionItem/CollectionItem.container';

const CollectionPage = ({ collection: { title, items } }) => (
  <CollectionPageContainer>
    <CollectionTitle>{title}</CollectionTitle>
    <CollectionItemsContainer>
      {items.map(item => (
        <CollectionItem key={item.id} item={item} />
      ))}
    </CollectionItemsContainer>
  </CollectionPageContainer>
);

CollectionPage.defaultProps = {
  collection: {
    items: [],
    title: '',
  },
};

CollectionPage.propTypes = {
  collection: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    routeName: PropTypes.string,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        imageUrl: PropTypes.string,
        price: PropTypes.number,
      })
    ),
  }),
};

export default CollectionPage;
