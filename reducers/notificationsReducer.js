import * as TYPES from 'actions/types';

export const notificationsByUserReducer = (
  state = { notifications: [], isDeleting: false },
  action
) => {
  switch (action.type) {
    case TYPES.GET_NOTIFICATIONS_BY_USER_REQUEST:
      return { ...state, loading: true };
    case TYPES.DELETE_NOTIFICATION_BY_ID_REQUEST:
      return { ...state, isDeleting: true };

    case TYPES.GET_NOTIFICATIONS_BY_USER_SUCCESS:
      return { loading: false, notifications: action.payload };
    case TYPES.DELETE_NOTIFICATION_BY_ID_SUCCESS:
      return {
        ...state,
        isDeleting: false,
        notifications: state.notifications.filter(
          (notification) => notification.id !== action.payload.id
        ),
      };
    case TYPES.GET_NOTIFICATIONS_BY_USER_FAIL:
      return { loading: false, error: action.payload };
    case TYPES.DELETE_NOTIFICATION_BY_ID_FAIL:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export const getNotificationByIdReducer = (
  state = { notification: {} },
  action
) => {
  switch (action.type) {
    case TYPES.GET_NOTIFICATION_BY_ID_REQUEST:
      return { ...state, loading: true };
    case TYPES.GET_NOTIFICATION_BY_ID_SUCCESS:
      return { loading: false, notification: action.payload };
    case TYPES.GET_NOTIFICATION_BY_ID_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
