import * as TYPES from '../actions';

export const userDetailsReducer = (state = {}, action) => {
  switch (action.type) {
    case TYPES.USER_DETAILS_REQUEST:
      return { ...state, loading: true };
    case TYPES.USER_DETAILS_SUCCESS:
      return { loading: false, user: action.payload };
    case TYPES.USER_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    case TYPES.USER_DETAILS_RESET:
      return { user: {} };
    default:
      return state;
  }
};
