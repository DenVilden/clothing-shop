import { connect } from 'react-redux';
import { compose } from 'redux';
import {
  selectIsCollectionsLoaded,
  selectShopCollection,
} from '../../selectors/shop.selector';
import WithSpinner from '../../components/WithSpinner/WithSpinner';
import CollectionPage from './CollectionPage';

const mapStateToProps = (state, props) => ({
  loading: !selectIsCollectionsLoaded(state),
  collection: selectShopCollection(props.match.params.collectionId)(state),
});

export default compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionPage);
