import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import { selectCartItems } from '../../selectors/cart.selectors';
import CartDropdown from './CartDropdown';
import { toggleCartHiddenAction } from '../../actions/cart.actions';

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

const mapDispatchToProps = {
  toggleCartHidden: () => toggleCartHiddenAction()
};

const CartDropdownContainer = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withRouter
)(CartDropdown);

export default CartDropdownContainer;
