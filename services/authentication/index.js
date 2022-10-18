import requests from 'services';

export async function LOGIN_ACCOUNT(data, callback, onError) {
  try {
    let req = await requests.post('auth/login', data);
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

export async function QUICK_REGISTER(data, callback, onError) {
  try {
    let register = await requests.post('auth/signup', data);

    if (register.data) {
      callback && callback(register.data);
    } else {
      throw register;
    }
  } catch (error) {
    onError && onError(error);
  }
}
