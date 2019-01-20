import React from 'react';
import PropTypes from 'prop-types';

function OffersList({offers}) {
  return (
    <div>{offers.length} offers</div>
  );
}

OffersList.propTypes = {
  offers: PropTypes.array.isRequired
};

export default OffersList;
