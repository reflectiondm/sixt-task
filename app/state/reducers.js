import { LOAD_OFFERS_FINISH, LOAD_OFFERS_START} from './actions';

const initialState = {
  isLoading: true,
  offers: []
};

export function mainReducer(state, action) {
  if (typeof state === 'undefined') {
    return initialState;
  }

  switch(action.type) {
  case LOAD_OFFERS_START: 
    return {...state, isLoading: true };
  case LOAD_OFFERS_FINISH:
    return {...state, isLoading: false, offers: action.offers};
  }

  return state;
}

