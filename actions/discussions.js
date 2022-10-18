import * as TYPES from './types';
import services from '@/services/index';

export const getDiscussions = () => async (dispatch) => {
  try {
    const response = await services.get('discussions');

    dispatch({
      type: TYPES.FETCH_DISCUSSIONS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: 'error',
      payload: error.response,
    });
  }
};

export const getDiscussion = (id) => async (dispatch) => {
  try {
    const response = await services.get(`discussions/${id}`);

    dispatch({
      type: TYPES.FETCH_DISCUSSION_BY_ID,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: 'error',
      payload: error.response,
    });
  }
};
