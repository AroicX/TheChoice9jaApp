import requests from '../services';
import * as TYPES from './types';

export const getNotificationByUser = () => async (dispatch) => {
  const userId = JSON.parse(localStorage.getItem('user-data')).user.id;

  try {
    dispatch({
      type: TYPES.GET_NOTIFICATIONS_BY_USER_REQUEST,
    });

    const { data } = await requests.get(`notifications/user/${userId}`);

    dispatch({
      type: TYPES.GET_NOTIFICATIONS_BY_USER_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    dispatch({
      type: TYPES.GET_NOTIFICATIONS_BY_USER_FAIL,
      payload: error,
    });
  }
};

export const updateNotificationById = (id) => async (dispatch) => {
  try {
    dispatch({
      type: TYPES.UPDATE_NOTIFICATION_REQUEST,
    });

    const { data } = await requests.patch(`notifications/${id}`);

    dispatch({
      type: TYPES.UPDATE_NOTIFICATION_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    dispatch({
      type: TYPES.UPDATE_NOTIFICATION_FAIL,
      payload: error,
    });
  }
};

export const getNotificationById = (id) => async (dispatch) => {
  try {
    dispatch({
      type: TYPES.GET_NOTIFICATION_BY_ID_REQUEST,
    });

    const { data } = await requests.get(`notifications/${id}`);

    dispatch({
      type: TYPES.GET_NOTIFICATION_BY_ID_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    dispatch({
      type: TYPES.GET_NOTIFICATION_BY_ID_FAIL,
      payload: error,
    });
  }
};

export const deleteNotificationById = (id) => async (dispatch) => {
  try {
    dispatch({
      type: TYPES.DELETE_NOTIFICATION_BY_ID_REQUEST,
    });

    const { data } = await requests.delete(`notifications/delete/${id}`);

    dispatch({
      type: TYPES.DELETE_NOTIFICATION_BY_ID_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    dispatch({
      type: TYPES.DELETE_NOTIFICATION_BY_ID_FAIL,
      payload: error,
    });
  }
};
