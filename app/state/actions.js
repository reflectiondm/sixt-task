export const LOAD_OFFERS_START = 'LOAD_OFFERS_START'; 
export const LOAD_OFFERS_FINISH = 'LOAD_OFFERS_FINISH'; 

export function startLoadingOffers() {
  return {
    type: LOAD_OFFERS_START
  };
}

export function finishLoadingOffers(offers) {
  return {
    type: LOAD_OFFERS_FINISH,
    offers
  };
}
