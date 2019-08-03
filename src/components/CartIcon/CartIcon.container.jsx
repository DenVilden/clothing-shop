import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import CartIcon from './CartIcon';
import { toggleCartHiddenAction } from '../../actions/cart.actions';
import { selectCartItemsCount } from '../../selectors/cart.selectors';

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
});

const mapDispatchToProps = {
  toggleCartHidden: () => toggleCartHiddenAction()
};

const CartIconContainer = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(CartIcon);

export default CartIconContainer;
