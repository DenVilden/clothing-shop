import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import {
  CollectionItemContainer,
  CollectionFooterContainer,
  AddButton,
  BackgroundImage,
  NameContainer,
  PriceContainer
} from './CollectionItem.styles';

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;

  const onAdd = useCallback(() => addItem(item), [addItem, item]);

  return (
    <CollectionItemContainer>
      <BackgroundImage imageUrl={imageUrl} />
      <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>${price}</PriceContainer>
      </CollectionFooterContainer>
      <AddButton inverted onClick={onAdd}>
        Add to cart
      </AddButton>
    </CollectionItemContainer>
  );
};

CollectionItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    imageUrl: PropTypes.string,
    price: PropTypes.number
  }).isRequired,
  addItem: PropTypes.func.isRequired
};

export default CollectionItem;
