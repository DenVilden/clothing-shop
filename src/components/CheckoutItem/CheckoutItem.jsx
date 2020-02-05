import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import {
  CheckoutItemContainer,
  ImageContainer,
  TextContainer,
  QuantityContainer,
  RemoveButtonContainer,
} from './CheckoutItem.styles';
import {
  clearItemFromCartAction,
  addItemAction,
  removeItemAction,
} from '../../store/actions/cart.actions';

const propTypes = {
  cartItem: PropTypes.shape({
    id: PropTypes.number,
    imageUrl: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    quantity: PropTypes.number,
  }).isRequired,
};

const CheckoutItem = ({ cartItem }) => {
  const dispatch = useDispatch();

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img alt="item" src={cartItem.imageUrl} />
      </ImageContainer>
      <TextContainer>{cartItem.name}</TextContainer>
      <QuantityContainer>
        <div
          onClick={() => dispatch(removeItemAction(cartItem))}
          onKeyPress={() => dispatch(removeItemAction(cartItem))}
          role="button"
          tabIndex="0"
        >
          &#10094;
        </div>
        <span>{cartItem.quantity}</span>
        <div
          onClick={() => dispatch(addItemAction(cartItem))}
          onKeyPress={() => dispatch(addItemAction(cartItem))}
          role="button"
          tabIndex="0"
        >
          &#10095;
        </div>
      </QuantityContainer>
      <TextContainer>${cartItem.price}</TextContainer>
      <RemoveButtonContainer
        onClick={() => dispatch(clearItemFromCartAction(cartItem))}
        onKeyPress={() => dispatch(clearItemFromCartAction(cartItem))}
        role="button"
        tabIndex="0"
      >
        &#10005;
      </RemoveButtonContainer>
    </CheckoutItemContainer>
  );
};

CheckoutItem.propTypes = propTypes;

export default CheckoutItem;
