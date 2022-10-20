import { combineReducers } from 'redux';
import { discussionsReducer, discussionReducer } from './discussionsReducer';
import { userDetailsReducer } from './usersReducer';

const combinedReducers = combineReducers({
  discussions: discussionsReducer,
  discussion: discussionReducer,
  userDetails: userDetailsReducer,
});

export default combinedReducers;
