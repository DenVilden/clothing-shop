import { connect } from 'react-redux';
import CheckoutItem from './CheckoutItem';
import {
  clearItemFromCartAction,
  addItemAction,
  removeItemAction
} from '../../actions/cart.actions';

const mapDispatchToProps = {
  clearItemFromCart: item => clearItemFromCartAction(item),
  addItem: item => addItemAction(item),
  removeItem: item => removeItemAction(item)
};

export default connect(
  null,
  mapDispatchToProps
)(CheckoutItem);
