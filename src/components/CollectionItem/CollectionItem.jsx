import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import {
  CollectionItemContainer,
  CollectionFooterContainer,
  BackgroundImage,
  NameContainer,
  PriceContainer,
  AddButton,
} from './CollectionItem.styles';
import { addItemAction } from '../../store/actions/cart.actions';

const propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    imageUrl: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};

const CollectionItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <CollectionItemContainer>
      <BackgroundImage imageUrl={item.imageUrl} />
      <CollectionFooterContainer>
        <NameContainer>{item.name}</NameContainer>
        <PriceContainer>${item.price}</PriceContainer>
      </CollectionFooterContainer>
      <AddButton inverted onClick={() => dispatch(addItemAction(item))}>
        Add to cart
      </AddButton>
    </CollectionItemContainer>
  );
};

CollectionItem.propTypes = propTypes;

export default CollectionItem;
