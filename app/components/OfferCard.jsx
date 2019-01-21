import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { colors } from '../styles/constants';

const textSizesMixin = css`
  @media screen and (max-width: 320px){
    font-size: 12px;
  }
  @media screen and (min-width: 410px) and (max-width: 780px){
    font-size: 14px;
  }
`;

const OfferCardTileBox = styled.div`
  padding-top: 100%;
  height: 0;
  width: 100%;
  background: ${colors.sixtOrange};
  position: relative;
`;

const OfferCardTileLayout = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  display: grid;
  grid-gap: 2px;
  grid-template: ". name ." 20px
                 ". image ." 1fr
                 ". price ." 40px /
                 5px 1fr 5px;
`;

const OfferCarPicture = styled.img`
  object-fit: contain;
  grid-area: image;
  width: 100%;
`;

const OfferCarName = styled.div`
  grid-area: name;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;

  ${textSizesMixin}
`;

const OfferCarPrice = styled.div`
  grid-area: price;

  ${textSizesMixin}
`;

const OfferCarPriceValue = styled.span`
  font-size: 24px;

  @media screen and (max-width: 320px){
    font-size: 20px;
  }
`;

export default function OfferCard({offer}) {
  const carName = offer.description;
  const carPicture = offer.carGroupInfo.modelExample.imageUrl;
  const carPrice = offer.prices.dayPrice.amount.display;
  const unit = offer.prices.dayPrice.unit;

  return (
    <OfferCardTileBox>
      <OfferCardTileLayout>
        <OfferCarName title={carName}>{carName}</OfferCarName>
        <OfferCarPicture src={carPicture} alt={carName}></OfferCarPicture>
        <OfferCarPrice>ab €<OfferCarPriceValue>{carPrice}</OfferCarPriceValue> pro {unit}</OfferCarPrice>
      </OfferCardTileLayout>
    </OfferCardTileBox>
  );
}

OfferCard.propTypes = {
  offer: PropTypes.object.isRequired
};
