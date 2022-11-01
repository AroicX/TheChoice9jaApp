import * as TYPES from 'actions/types';

export const postsReducer = (state = { posts: [] }, action) => {
  switch (action.type) {
    case TYPES.GET_POSTS_REQUEST:
      return { ...state, loading: true };
    case TYPES.GET_POSTS_SUCCESS:
      return { loading: false, posts: action.payload };
    case TYPES.GET_POSTS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const postByIdReducer = (state = { post: {} }, action) => {
  switch (action.type) {
    case TYPES.GET_POSTS_BY_ID_REQUEST:
      return { ...state, loading: true };
    case TYPES.GET_POSTS_BY_ID_SUCCESS:
      return { loading: false, post: action.payload };
    case TYPES.GET_POSTS_BY_ID_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const postsByUserReducer = (state = { posts: {} }, action) => {
  switch (action.type) {
    case TYPES.GET_POSTS_BY_USER_REQUEST:
      return { ...state, loading: true };
    case TYPES.GET_POSTS_BY_USER_SUCCESS:
      return { loading: false, posts: action.payload };
    case TYPES.GET_POSTS_BY_USER_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const postsByDiscussionReducer = (state = { posts: {} }, action) => {
  switch (action.type) {
    case TYPES.GET_POSTS_BY_DISCUSSION_REQUEST:
      return { ...state, loading: true };
    case TYPES.GET_POSTS_BY_DISCUSSION_SUCCESS:
      return { loading: false, posts: action.payload };
    case TYPES.GET_POSTS_BY_DISCUSSION_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
