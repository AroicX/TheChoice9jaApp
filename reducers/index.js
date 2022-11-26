import { combineReducers } from 'redux';
import { userDetailsReducer } from './usersReducer';
import {
  notificationsByUserReducer,
  getNotificationByIdReducer,
} from './notificationsReducer';

const combinedReducers = combineReducers({
  userDetails: userDetailsReducer,
  notifications: notificationsByUserReducer,
  notification: getNotificationByIdReducer,
});

export default combinedReducers;
