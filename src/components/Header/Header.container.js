import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Header from './Header';
import { selectCartHidden } from '../../store/selectors/cart.selectors';
import { selectCurrentUser } from '../../store/selectors/user.selectors';
import { signOutStartAction } from '../../store/actions/user.actions';

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

const mapDispatchToProps = {
  signOutStart: () => signOutStartAction(),
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
