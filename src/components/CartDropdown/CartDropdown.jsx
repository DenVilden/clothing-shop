import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  CartDropdownContainer,
  CartItemsContainer,
  EmptyMessageContainer,
  CartDropdownButton,
} from './CartDropdown.styles';
import CartItem from './CartItem/CartItem';
import { selectCartItems } from '../../store/selectors/cart.selectors';
import { toggleCartHiddenAction } from '../../store/actions/cart.actions';

const propTypes = {
  history: PropTypes.shape({ push: PropTypes.func }).isRequired,
};

const CartDropdown = ({ history }) => {
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

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
      <CartDropdownButton
        onClick={() => {
          history.push('/checkout');
          dispatch(toggleCartHiddenAction());
        }}
      >
        GO TO CHECKOUT
      </CartDropdownButton>
    </CartDropdownContainer>
  );
};

CartDropdown.propTypes = propTypes;

export default withRouter(CartDropdown);
