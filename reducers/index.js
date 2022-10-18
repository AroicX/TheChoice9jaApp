import { combineReducers } from 'redux';
import { discussionsReducer, discussionReducer } from './discussionsReducer';

const combinedReducers = combineReducers({
  discussions: discussionsReducer,
  discussion: discussionReducer,
});

export default combinedReducers;
