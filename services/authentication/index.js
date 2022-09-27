import requests from 'services';

export async function LOGIN_ACCOUNT(data, callback, onError) {
  try {
    let req = await requests.post(`/auth/login`, data);
    if (req.data) {
      callback && callback(req.data);
    } else {
      throw req;
    }

    return req;
  } catch (err) {
    onError && onError(err);
  }
}
