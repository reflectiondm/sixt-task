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
  color: ${({active}) => active ? colors.pureWhite : colors.sixtBlack };
  text-transform: uppercase;
  border: none;
  font-size: 16px;

  grid-row: 2;
`;

function isOptionSelected(sortingId, selectedSortingId) {
  return sortingId === selectedSortingId;
}

export default function OffersSortingSelector({selectedSortingId, onSortingSelect}) {
  return (
    <SortingSelectorLayout>
      <SelectorTitle>Sortieren nach</SelectorTitle>

      <SelectorButton 
        active={isOptionSelected('name', selectedSortingId)}
        onClick={() => onSortingSelect('name')}
      >Name</SelectorButton>
      <SelectorButton 
        active={isOptionSelected('price', selectedSortingId)}
        onClick={() => onSortingSelect('price')}
      >Price</SelectorButton>
      <SelectorButton 
        active={isOptionSelected('popularity', selectedSortingId)}
        onClick={() => onSortingSelect('popularity')}
      >Popularität</SelectorButton>
    </SortingSelectorLayout>
  );
}

OffersSortingSelector.propTypes = {
  selectedSortingId: PropTypes.string.isRequired,
  onSortingSelect: PropTypes.func.isRequired
};
