import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Header from './Header';
import { selectCartHidden } from '../../selectors/cart.selectors';
import { selectCurrentUser } from '../../selectors/user.selectors';
import { signOutStartAction } from '../../actions/user.actions';

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

const mapDispatchToProps = {
  signOutStart: () => signOutStartAction(),
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
