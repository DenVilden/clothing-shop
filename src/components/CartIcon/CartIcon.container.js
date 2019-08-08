import { connect } from 'react-redux';
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIcon);
