import React, {Fragment} from 'react';
import { startLoadingOffers, finishLoadingOffers } from '../state/actions';
import { getOffersData } from '../offers-service';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import OffersList from './OffersList';
import OffersSortingSelector from './OffersSortingSelector';

class OffersContainer extends React.PureComponent {
  componentDidMount() {
    this.props.loadOffers();
  }

  render() {
    if (this.props.isLoading) {
      return <div>Offers are loading</div>;
    }

    return (
      <Fragment>
        <OffersSortingSelector selectedSortingId={'name'}/>
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
    }
  };
}

function mapStateToProps(state) {
  return {
    isLoading: state.isLoading,
    offers: state.offers
  };
}

OffersContainer.propTypes = {
  isLoading: PropTypes.bool,
  loadOffers: PropTypes.func.isRequired,
  offers: PropTypes.array.isRequired
};

const ConnectedOffersContainer = connect(mapStateToProps, mapDispatchToProps)(OffersContainer);

export default ConnectedOffersContainer;
