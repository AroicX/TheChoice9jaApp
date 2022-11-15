import requests from '../index';

export async function GET_ELECTIONS(callback, onError) {
  try {
    let elections = await requests.get(`elections/`);
    if (elections.data) {
      callback && callback(elections.data);
    } else {
      throw elections;
    }
  } catch (error) {
    onError(error);
  }
}

export async function GET_ELECTION_BY_ID(election_id, callback, onError) {
  try {
    let election = await requests.get(`elections/${election_id}`);
    if (election.data) {
      callback && callback(election.data);
    } else {
      throw election;
    }
  } catch (error) {
    onError(error);
  }
}

export async function VOTE_ON_ELECTION(election_id, data, callback, onError) {
  try {
    let election = await requests.patch(`elections/vote/${election_id}`, data);
    if (election.data) {
      callback && callback(election.data);
    } else {
      throw election;
    }
  } catch (error) {
    onError(error);
  }
}
