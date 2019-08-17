import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CheckoutPage from './CheckoutPage';
import {
  selectCartItems,
  selectCartTotal,
} from '../../selectors/cart.selectors';

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
