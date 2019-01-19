import React from 'react';
import { startLoadingOffers, finishLoadingOffers } from '../state/actions';
import { getOffersData } from '../offers-service';
import { connect } from 'react-redux';

class OfferLoader extends React.PureComponent {
  componentDidMount() {
    this.props.loadOffers();
  }

  render() {
    if (this.props.isLoading) {
      return <div>Offers are loading</div>;
    }

    return <div>{this.props.offers.length} offers are loaded</div>;
  }
}

function mapDispatchToProps(dispatch) {
  return {
    loadOffers: () => {
      dispatch(startLoadingOffers());
      getOffersData()
        .then(offers => dispatch(finishLoadingOffers(offers)));
    }
  };
}

function mapStateToProps(state) {
  return {
    isLoading: state.isLoading,
    offers: state.offers
  };
}

const ConnectedOfferLoader = connect(mapStateToProps, mapDispatchToProps)(OfferLoader);

export default ConnectedOfferLoader;
