import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import {
  CartDropdownContainer,
  CartItemsContainer,
  EmptyMessageContainer,
  CartDropdownButton,
} from './CartDropdown.styles';
import CartItem from '../CartItem/CartItem';

const CartDropdown = ({ cartItems, history, toggleCartHidden }) => {
  const goTo = useCallback(() => {
    toggleCartHidden();
    history.push('/checkout');
  }, [history, toggleCartHidden]);

  return (
    <CartDropdownContainer>
      <CartItemsContainer>
        {cartItems.length ? (
          cartItems.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
        )}
      </CartItemsContainer>
      <CartDropdownButton onClick={goTo}>GO TO CHECKOUT</CartDropdownButton>
    </CartDropdownContainer>
  );
};

CartDropdown.propTypes = {
  cartItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      imageUrl: PropTypes.string,
      name: PropTypes.string,
      price: PropTypes.number,
      quantity: PropTypes.number,
    })
  ).isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  toggleCartHidden: PropTypes.func.isRequired,
};

export default CartDropdown;
