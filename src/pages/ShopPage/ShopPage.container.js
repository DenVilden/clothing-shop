import { connect } from 'react-redux';
import ShopPage from './ShopPage';
import { fetchCollectionStartAction } from '../../actions/shop.actions';

const mapDispatchToProps = {
  fetchCollectionStart: () => fetchCollectionStartAction()
};

export default connect(
  null,
  mapDispatchToProps
)(ShopPage);
