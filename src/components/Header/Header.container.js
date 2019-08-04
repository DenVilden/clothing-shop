import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Header from './Header';
import { selectCartHidden } from '../../selectors/cart.selectors';
import { selectCurrentUser } from '../../selectors/user.selectors';

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
