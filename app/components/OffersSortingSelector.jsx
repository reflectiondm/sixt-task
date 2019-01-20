import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { colors } from '../styles/constants';

const SortingSelectorLayout = styled.div`
  height: 70px;
  padding: 5px;

  display: grid;
  grid-template: "title title ." 20px
                 "option option option" 40px /
                 1fr 1fr 1fr;
  grid-gap: 5px;
  
  background: ${colors.sixtBlack};
`;


const SelectorTitle = styled.span`
  grid-area: title;
  color: ${colors.pureWhite};
`;

const SelectorButton = styled.button`
  background: ${({active}) => active ? colors.sixtOrange : colors.pureWhite };
  text-transform: uppercase;

  grid-row: 2;
`;

function isOptionSelected(sortingId, selectedSortingId) {
  return sortingId === selectedSortingId;
}

export default function OffersSortingSelector(props) {
  const selectedSortingId = props.selectedSortingId;

  return (
    <SortingSelectorLayout>
      <SelectorTitle>Sortieren nach</SelectorTitle>
      <SelectorButton active={isOptionSelected('name', selectedSortingId)}>Name</SelectorButton>
      <SelectorButton active={isOptionSelected('price', selectedSortingId)}>Price</SelectorButton>
      <SelectorButton active={isOptionSelected('popularity', selectedSortingId)}>Popularität</SelectorButton>
    </SortingSelectorLayout>
  );
}

OffersSortingSelector.propTypes = {
  selectedSortingId: PropTypes.string.isRequired
};
