import { LOAD_OFFERS_FINISH, LOAD_OFFERS_START, SORT_OFFERS } from './actions';

const initialState = {
  isLoading: true,
  selectedSortingId: '',
  offers: []
};

function sortOffers(offers, sortingId) {
  return [...offers].sort((a, b) => {
    if (a.sortIndexes[sortingId] < b.sortIndexes[sortingId]){
      return -1;
    }
    if (a.sortIndexes[sortingId] > b.sortIndexes[sortingId]){
      return 1;
    }
    
    return 0;
  });
}

export function mainReducer(state, action) {
  if (typeof state === 'undefined') {
    return initialState;
  }

  switch(action.type) {
  case LOAD_OFFERS_START: 
    return {...state, isLoading: true };
  case LOAD_OFFERS_FINISH:
    return {...state, isLoading: false, offers: action.offers};
  case SORT_OFFERS: {
    const {offers} = state;
    const {sortingId} = action;
    const sortedOffers = sortOffers(offers, sortingId);
    return {...state, offers: sortedOffers, selectedSortingId: sortingId};
  }
  }
  return state;
}
