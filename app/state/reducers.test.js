import { mainReducer } from './reducers';
import { startLoadingOffers, finishLoadingOffers, sortOffers } from './actions';

describe('mainReducer action', () => {
  const initialState = mainReducer();

  describe('LOAD_OFFERS_START', () => {
    it('should set isLoading field value to true', () => {
      const { isLoading } = mainReducer(initialState, startLoadingOffers());
      expect(isLoading).toBe(true);
    });
  });

  describe('LOAD_OFFERS_FINISH', () => {
    const offersParam = [{ id: 1 }];

    it('should set isLoading field value to false and set offers to field to payload', () => {
      const { isLoading, offers } = mainReducer(initialState, finishLoadingOffers(offersParam));
      expect(isLoading).toBe(false);
      expect(offers).toEqual(offersParam);
    });
  });

  describe('SORT_OFFERS', () => {
    const originalOffers = [
      {
        id: 1, 
        sortIndexes:{
          a: 1,
          b: 2,
          c: 3
        }
      },{
        id: 2, 
        sortIndexes:{
          a: 2,
          b: 3,
          c: 1
        }
      },{
        id: 3, 
        sortIndexes:{
          a: 3,
          b: 1,
          c: 2
        }
      },
    ];

    
    const testCases = [
      {sortingId: 'a', expectedOfferIds: [1, 2, 3]},
      {sortingId: 'b', expectedOfferIds: [3, 1, 2]},
      {sortingId: 'c', expectedOfferIds: [2, 3, 1]},
      {sortingId: 'd', expectedOfferIds: [1, 2, 3]},
    ];
    
    const preSortingState = {...initialState, offers: originalOffers };
    
    testCases.forEach(({sortingId, expectedOfferIds}) => {
      describe(`when sortingId is ${sortingId}`, () => {
        it(`sort offers as ${JSON.stringify(expectedOfferIds)}`, () => {
          const { offers, selectedSortingId } = mainReducer(preSortingState, sortOffers(sortingId));
          const offerIds = offers.map(offer => offer.id);
          expect(selectedSortingId).toBe(sortingId);
          expect(offerIds).toEqual(expectedOfferIds);
        });
      });
    });
  });
}); 
