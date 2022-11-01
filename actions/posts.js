import * as TYPES from './types';
import services from '@/services/index';

export const getPosts = () => async (dispatch) => {
  try {
    dispatch({
      type: TYPES.GET_POSTS_REQUEST,
    });

    const response = await services.get('posts');

    dispatch({
      type: TYPES.GET_POSTS_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: TYPES.GET_POSTS_FAIL,
      payload: error.response,
    });
  }
};

export const getPostById = (id) => async (dispatch) => {
  try {
    dispatch({
      type: TYPES.GET_POSTS_BY_ID_REQUEST,
    });

    const response = await services.get(`posts/${id}`);

    dispatch({
      type: TYPES.GET_POSTS_BY_ID_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: TYPES.GET_POSTS_BY_ID_FAIL,
      payload: error.response,
    });
  }
};

export const getPostsByUser = (id) => async (dispatch) => {
  try {
    dispatch({
      type: TYPES.GET_POSTS_BY_USER_REQUEST,
    });

    const response = await services.get(`posts/user/${id}`);

    dispatch({
      type: TYPES.GET_POSTS_BY_USER_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: TYPES.GET_POSTS_BY_USER_FAIL,
      payload: error.response,
    });
  }
};

export const getPostsByDiscussion = (id) => async (dispatch) => {
  try {
    dispatch({
      type: TYPES.GET_POSTS_BY_DISCUSSION_REQUEST,
    });

    const response = await services.get(`posts/discussions/${id}`);

    dispatch({
      type: TYPES.GET_POSTS_BY_DISCUSSION_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: TYPES.GET_POSTS_BY_DISCUSSION_FAIL,
      payload: error.response,
    });
  }
};
