import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const sixtOrange = '#ff5f00';

const OffersGrid = styled.div`
  display: grid;
  grid-gap: 15px;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: auto;

  @media screen and (min-width: 780px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const OfferCardTileBox = styled.div`
  padding-top: 100%;
  height: 0;
  width: 100%;
  background: ${sixtOrange};
  position: relative;
`;

const OfferCardTileLayout = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

function OffersList({offers}) {
  return (
    <OffersGrid>{offers.map(offer => <OfferCard key={offer.id} offer={offer}/>)}</OffersGrid>
  );
}

function OfferCard({offer}) {
  return (
    <OfferCardTileBox>
      <OfferCardTileLayout>
        {offer.description}
      </OfferCardTileLayout>
    </OfferCardTileBox>
  );
}

OfferCard.propTypes = {
  offer: PropTypes.object.isRequired
};

OffersList.propTypes = {
  offers: PropTypes.array.isRequired
};

export default OffersList;
