import React from 'react';
import { startLoadingOffers, finishLoadingOffers, sortOffers } from '../state/actions';
import { getOffersData } from '../offers-service';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import OffersList from './OffersList';
import OffersSortingSelector from './OffersSortingSelector';
import LoadingIndicator from './Loader';
import Error from './Error';
import { sortingOptions } from '../constants';

class OffersContainer extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      error: false
    };
  }
  
  componentDidMount() {
    this.props.loadOffers()
      .catch(() => this.setState({ error: true }));
  }

  render() {
    if (this.state.error) {
      return <Error />;
    }

    if (this.props.isLoading) {
      return <LoadingIndicator>Offers are loading</LoadingIndicator>;
    }

    return (
      <div>
        <OffersSortingSelector 
          selectedSortingId={this.props.selectedSortingId} 
          onSortingSelect={this.props.onSortingSelect}
        />
        <OffersList offers={this.props.offers} />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    loadOffers: () => {
      dispatch(startLoadingOffers());
      return getOffersData()
        .then(offers => dispatch(finishLoadingOffers(offers)))
        .then(() => dispatch(sortOffers(sortingOptions.name)));
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
