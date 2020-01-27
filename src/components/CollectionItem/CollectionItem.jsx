import React from 'react';
import PropTypes from 'prop-types';
import {
  CollectionItemContainer,
  CollectionFooterContainer,
  BackgroundImage,
  NameContainer,
  PriceContainer,
  AddButton,
} from './CollectionItem.styles';

const CollectionItem = ({ item, addItem }) => (
  <CollectionItemContainer>
    <BackgroundImage imageUrl={item.imageUrl} />
    <CollectionFooterContainer>
      <NameContainer>{item.name}</NameContainer>
      <PriceContainer>${item.price}</PriceContainer>
    </CollectionFooterContainer>
    <AddButton inverted onClick={() => addItem(item)}>
      Add to cart
    </AddButton>
  </CollectionItemContainer>
);

CollectionItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    imageUrl: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
  addItem: PropTypes.func.isRequired,
};

export default CollectionItem;
