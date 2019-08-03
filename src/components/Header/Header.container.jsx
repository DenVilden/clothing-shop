import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import Header from './Header';
import { selectCartHidden } from '../../selectors/cart.selectors';
import { selectCurrentUser } from '../../selectors/user.selectors';

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

const HeaderContainer = compose(connect(mapStateToProps))(Header);

export default HeaderContainer;
