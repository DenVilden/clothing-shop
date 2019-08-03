import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import CheckoutPage from './CheckoutPage';
import {
  selectCartItems,
  selectCartTotal
} from '../../selectors/cart.selectors';

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});

const CheckoutPageContainer = compose(connect(mapStateToProps))(CheckoutPage);

export default CheckoutPageContainer;
