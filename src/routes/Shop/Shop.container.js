import { connect } from 'react-redux';
import Shop from './Shop';
import { fetchCollectionStartAction } from '../../actions/shop.actions';

const mapDispatchToProps = {
  fetchCollectionStart: () => fetchCollectionStartAction(),
};

export default connect(
  null,
  mapDispatchToProps
)(Shop);
