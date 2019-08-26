import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import StripeButton from './StripeButton';
import { selectCurrentUser } from '../../selectors/user.selectors';

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(StripeButton);
