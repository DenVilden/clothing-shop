import React from 'react';
import PropTypes from 'prop-types';
import {
  CartDropdownContainer,
  CartItemsContainer,
  EmptyMessageContainer,
  CartDropdownButton
} from './CartDropdown.styles';
import CarItem from '../CartItem/CarItem';

const CartDropdown = ({ cartItems, history, toggleCartHidden }) => (
  <CartDropdownContainer>
    <CartItemsContainer>
      {cartItems.length ? (
        cartItems.map(cartItem => <CarItem key={cartItem.id} item={cartItem} />)
      ) : (
        <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
      )}
    </CartItemsContainer>
    <CartDropdownButton
      onClick={() => {
        toggleCartHidden();
        history.push('/checkout');
      }}
    >
      GO TO CHECKOUT
    </CartDropdownButton>
  </CartDropdownContainer>
);

CartDropdown.propTypes = {
  cartItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      imageUrl: PropTypes.string,
      name: PropTypes.string,
      price: PropTypes.number,
      quantity: PropTypes.number
    })
  ).isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  toggleCartHidden: PropTypes.func.isRequired
};

export default CartDropdown;
