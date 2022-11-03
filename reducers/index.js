import { combineReducers } from 'redux';
import { discussionsReducer, discussionReducer } from './discussionsReducer';
import { userDetailsReducer } from './usersReducer';
import {
  postsReducer,
  postByIdReducer,
  postsByUserReducer,
  postsByDiscussionReducer,
} from './postsReducer';

const combinedReducers = combineReducers({
  discussions: discussionsReducer,
  discussion: discussionReducer,
  userDetails: userDetailsReducer,
  posts: postsReducer,
  post: postByIdReducer,
  postByUser: postsByUserReducer,
  postByDiscussion: postsByDiscussionReducer,
});

export default combinedReducers;
