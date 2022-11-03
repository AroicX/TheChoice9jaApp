import requests from '../index';

export async function CREATE_COMMENT(data, postId, callback, onError) {
  try {
    let comment = await requests.post(`comments/create/${postId}`, data);
    if (comment.data) {
      callback && callback(comment.data);
    } else {
      throw comment;
    }
    return comment;
  } catch (err) {
    onError && onError(err);
  }
}

export async function GET_COMMENTS_BY_POST(postId, callback, onError) {
  try {
    let comment = await requests.get(`comments/post/${postId}`);
    if (comment.data) {
      callback && callback(comment.data);
    } else {
      throw comment;
    }
    return comment;
  } catch (err) {
    onError && onError(err);
  }
}

export async function GET_COMMENT_BY_ID(id, callback, onError) {
  try {
    let comment = await requests.get(`comments/${id}`);
    if (comment.data) {
      callback && callback(comment.data);
    } else {
      throw comment;
    }
    return comment;
  } catch (err) {
    onError && onError(err);
  }
}
