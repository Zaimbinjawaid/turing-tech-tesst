// Constatns
import { LISTING_ACTIONS } from '../../constants/ActionKeys';
import { REDUX_STATES } from '../../constants/ReduxStates';
import { LISTING_DATA } from '../../constants/General';

const {
  DEFAULT_KEY,
  LOADING,
  LIST,
  ERROR,
  COUNT,
} = REDUX_STATES;

const { FIRST_PAGE } = LISTING_DATA;

let initialState = {};

const Listing = (state = initialState, action) => {

  switch (action.type) {

  /* Get Listing  */
  // Request
  case LISTING_ACTIONS.GET_REQUEST:
    const keyR = action?.payload?.key || DEFAULT_KEY;
    return { 
      ...state,
      [keyR + LOADING]: true,
      [keyR + ERROR]: false,
    };

  // Success
  case LISTING_ACTIONS.GET_SUCCESS:
    const keyS = action?.payload?.key || DEFAULT_KEY;
    const responseS = action?.payload?.response?.data;
    const count = responseS?.totalCount || 0;
    return { 
      ...state,
      [keyS + LOADING]: false,
      [keyS + ERROR]: false,
      [keyS + LIST]: responseS,
      [keyS + COUNT]: count,
    };

  // Failure
  case LISTING_ACTIONS.GET_FAILURE:
    const keyE = action?.payload?.key || DEFAULT_KEY;

    return { 
      ...state,
      [keyE + LOADING]: false,
      [keyE + ERROR]: true
    };

  default:
    return state;
  }
};

export default Listing;