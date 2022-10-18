import * as TYPES from 'actions/types';

export const discussionsReducer = (state = [], action) => {
  switch (action.type) {
    case TYPES.FETCH_DISCUSSIONS:
      return { ...state, discussions: action.payload };
    default:
      return state;
  }
};

export const discussionReducer = (state = [], action) => {
  switch (action.type) {
    case TYPES.FETCH_DISCUSSION_BY_ID:
      return { ...state, discussion: action.payload };
    default:
      return state;
  }
};
