import { connect } from 'react-redux';
import Shop from './Shop';
import { fetchCollectionsStartAction } from '../../actions/shop.actions';

const mapDispatchToProps = {
  fetchCollectionStart: () => fetchCollectionsStartAction(),
};

export default connect(
  null,
  mapDispatchToProps
)(Shop);
