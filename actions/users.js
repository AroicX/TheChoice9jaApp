import requests from '../services';
import * as TYPES from './types';

export const getUserDetails = () => async (dispatch) => {
  try {
    dispatch({
      type: TYPES.USER_DETAILS_REQUEST,
    });

    const { data } = await requests.get(`users/me`);

    dispatch({
      type: TYPES.USER_DETAILS_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    dispatch({
      type: TYPES.USER_DETAILS_FAIL,
      payload: error.response,
    });
  }
};
