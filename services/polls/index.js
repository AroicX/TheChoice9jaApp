import requests from '../index';

export async function GET_POLLS(callback, onError) {
  try {
    let polls = await requests.get(`polls/`);
    if (polls.data) {
      callback && callback(polls.data);
    } else {
      throw polls;
    }
  } catch (error) {
    onError(error);
  }
}

export async function GET_POLL_BY_DISCUSSION(discussionId, callback, onError) {
  try {
    let polls = await requests.get(`polls/discussion/${discussionId}`);
    if (polls.data) {
      callback && callback(polls.data);
    } else {
      throw polls;
    }
  } catch (error) {
    onError(error);
  }
}

export async function GET_POLL_BY_ID(poll_id, callback, onError) {
  try {
    let poll = await requests.get(`polls/${poll_id}`);
    if (poll.data) {
      callback && callback(poll.data);
    } else {
      throw poll;
    }
  } catch (error) {
    onError(error);
  }
}

export async function VOTE_ON_POLL(poll_id, data, callback, onError) {
  try {
    let poll = await requests.patch(`polls/vote/${poll_id}`, data);
    if (poll.data) {
      callback && callback(poll.data);
    } else {
      throw poll;
    }
  } catch (error) {
    onError(error);
  }
}
