import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import OfferCard from './OfferCard';

const OffersGrid = styled.div`
  display: grid;
  grid-gap: 15px;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: auto;

  @media screen and (min-width: 780px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;


function OffersList({offers}) {
  return (
    <OffersGrid>{offers.map(offer => <OfferCard key={offer.id} offer={offer}/>)}</OffersGrid>
  );
}


OffersList.propTypes = {
  offers: PropTypes.array.isRequired
};

export default OffersList;
