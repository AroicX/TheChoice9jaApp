import requests from '@/services/index';

export async function GET_POST_BY_ID(post_id, callback, onError) {
  try {
    let post = await requests.get(`posts/${post_id}`);
    if (post.data) {
      callback && callback(post.data);
    } else {
      throw post;
    }
  } catch (error) {
    onError(error);
  }
}

export async function GET_POST_BY_USER(user_id, callback, onError) {
  try {
    let post = await requests.get(`posts/user/${user_id}`);
    if (post.data) {
      callback && callback(post.data);
    } else {
      throw post;
    }
  } catch (error) {
    onError(error);
  }
}
