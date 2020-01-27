import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import {
  selectIsCollectionFetching,
  selectShopCollectionsForPreview,
} from '../../selectors/shop.selectors';
import WithSpinner from '../../containers/WithSpinner';
import CollectionsPage from './CollectionsPage';

const mapStateToProps = createStructuredSelector({
  loading: selectIsCollectionFetching,
  collections: selectShopCollectionsForPreview,
});

export default compose(connect(mapStateToProps), WithSpinner)(CollectionsPage);
