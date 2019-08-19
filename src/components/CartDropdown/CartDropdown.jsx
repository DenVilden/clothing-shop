import React from 'react';
import PropTypes from 'prop-types';
import {
  CartDropdownContainer,
  CartItemsContainer,
  EmptyMessageContainer,
  CartDropdownButton,
} from './CartDropdown.styles';
import CartItem from '../CartItem/CartItem';

const CartDropdown = ({ cartItems, toggleCartHidden, history }) => {
  const goTo = () => {
    history.push('/checkout');
    toggleCartHidden();
  };

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
  toggleCartHidden: PropTypes.func.isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default CartDropdown;
