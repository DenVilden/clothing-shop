import { connect } from 'react-redux';
import { compose } from 'redux';
import ShopPage from './ShopPage';
import { fetchCollectionStartAsyncAction } from '../../actions/shop.actions';

const mapDispatchToProps = {
  fetchCollectionStartAsync: () => fetchCollectionStartAsyncAction()
};

const ShopPageContainer = compose(
  connect(
    null,
    mapDispatchToProps
  )
)(ShopPage);

export default ShopPageContainer;
