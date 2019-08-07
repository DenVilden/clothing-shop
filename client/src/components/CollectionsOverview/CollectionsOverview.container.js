import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import {
  selectIsCollectionFetching,
  selectShopCollectionsForPreview
} from '../../selectors/shop.selector';
import WithSpinner from '../WithSpinner/WithSpinner';
import CollectionsOverview from './CollectionsOverview';

const mapStateToProps = createStructuredSelector({
  loading: selectIsCollectionFetching,
  collections: selectShopCollectionsForPreview
});

export default compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionsOverview);