GET_DISCOUSSION_BY_ID;

import requests from '@/services/index';

export async function GET_DISCOUSSION_BY_ID(discussion_id, callback, onError) {
  try {
    let discussion = await requests.get(`/discussions/${discussion_id}`);
    if (discussion.data) {
      callback && callback(discussion.data);
    } else {
      throw discussion;
    }
  } catch (error) {
    onError(error);
  }
}
