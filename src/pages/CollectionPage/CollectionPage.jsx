import React from 'react';
import PropTypes from 'prop-types';
import {
  CollectionPageContainer,
  CollectionTitle,
  CollectionItemsContainer
} from './CollectionPage.styles';
import CollectionItemContainer from '../../components/CollectionItem/CollectionItem.container';

const CollectionPage = ({ collection: { title, items } }) => (
  <CollectionPageContainer>
    <CollectionTitle>{title}</CollectionTitle>
    <CollectionItemsContainer>
      {items.map(item => (
        <CollectionItemContainer key={item.id} item={item} />
      ))}
    </CollectionItemsContainer>
  </CollectionPageContainer>
);

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
        price: PropTypes.number
      })
    )
  }).isRequired
};

export default CollectionPage;
