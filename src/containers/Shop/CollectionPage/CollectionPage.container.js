import { connect } from 'react-redux';
import { compose } from 'redux';
import {
  selectIsCollectionsLoaded,
  selectShopCollection,
} from '../../../store/selectors/shop.selectors';
import WithSpinner from '../../WithSpinner';
import CollectionPage from './CollectionPage';

const mapStateToProps = (state, props) => ({
  loading: selectIsCollectionsLoaded(state),
  collection: selectShopCollection(props.match.params.collectionId)(state),
});

export default compose(connect(mapStateToProps), WithSpinner)(CollectionPage);