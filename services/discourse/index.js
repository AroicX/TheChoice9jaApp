import requests from '@/services/index';

export async function LOAD_DISCOURSSIONS_FROM_TIMELINE(callback, onError) {
  try {
    let post = await requests.get('posts/');
    if (post.data) {
      callback && callback(post.data);
    } else {
      throw post;
    }
  } catch (error) {
    onError(error);
  }
}
export async function GET_POST_BY_DISCOUSSION(post_id, callback, onError) {
  try {
    let post = await requests.get(`posts/discussions/${post_id}`);
    if (post.data) {
      callback && callback(post.data);
    } else {
      throw post;
    }
  } catch (error) {
    onError(error);
  }
}
export async function LIKE_DISCOURSE(post_id, callback, onError) {
  try {
    let post = await requests.patch(`posts/like/${post_id}`);
    if (post.data) {
      callback && callback(post.data);
    } else {
      throw post;
    }
  } catch (error) {
    onError(error);
  }
}
export async function DISLIKE_DISCOURSE(post_id, callback, onError) {
  try {
    let post = await requests.patch(`posts/dislike/${post_id}`);
    if (post.data) {
      callback && callback(post.data);
    } else {
      throw post;
    }
  } catch (error) {
    onError(error);
  }
}
