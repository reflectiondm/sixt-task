import React, {Fragment} from 'react';
import { startLoadingOffers, finishLoadingOffers, sortOffers } from '../state/actions';
import { getOffersData } from '../offers-service';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import OffersList from './OffersList';
import OffersSortingSelector from './OffersSortingSelector';
import LoadingIndicator from './Loader';

class OffersContainer extends React.PureComponent {
  componentDidMount() {
    this.props.loadOffers();
  }

  render() {
    if (this.props.isLoading) {
      return <LoadingIndicator>Offers are loading</LoadingIndicator>;
    }

    return (
      <Fragment>
        <OffersSortingSelector 
          selectedSortingId={this.props.selectedSortingId} 
          onSortingSelect={this.props.onSortingSelect}
        />
        <OffersList offers={this.props.offers} />
      </Fragment>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    loadOffers: () => {
      dispatch(startLoadingOffers());
      getOffersData()
        .then(offers => dispatch(finishLoadingOffers(offers)));
    },
    onSortingSelect: (sortingId) => {
      dispatch(sortOffers(sortingId));
    }
  };
}

function mapStateToProps(state) {
  return {
    isLoading: state.isLoading,
    offers: state.offers,
    selectedSortingId: state.selectedSortingId
  };
}

OffersContainer.propTypes = {
  isLoading: PropTypes.bool,
  loadOffers: PropTypes.func.isRequired,
  offers: PropTypes.array.isRequired,
  selectedSortingId: PropTypes.string.isRequired,
  onSortingSelect: PropTypes.func.isRequired
};

const ConnectedOffersContainer = connect(mapStateToProps, mapDispatchToProps)(OffersContainer);

export default ConnectedOffersContainer;
