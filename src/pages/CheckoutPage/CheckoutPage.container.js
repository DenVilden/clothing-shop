import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CheckoutPage from './CheckoutPage';
import {
  selectCartItems,
  selectCartTotal,
} from '../../selectors/cart.selectors';
import { selectCurrentUser } from '../../selectors/user.selectors';

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(CheckoutPage);
