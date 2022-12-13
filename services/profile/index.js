import requests from '@/services/index';

export async function GET_PROFILE_BY_ID(userId, callback, onError) {
  try {
    let user = await requests.get(`users/profile/${userId}`);
    if (user.data) {
      callback && callback(user.data);
    } else {
      throw user;
    }
  } catch (error) {
    onError(error);
  }
}

export async function UPDATE_PROFILE(data, callback, onError) {
  try {
    let user = await requests.patch(`users/me`, data);
    if (user.data) {
      callback && callback(user.data);
    } else {
      throw user;
    }
  } catch (error) {
    onError(error);
  }
}

export async function CHANGE_PASSWORD(data, callback, onError) {
  try {
    let password = await requests.patch('users/password-reset', data);
    if (password.data) {
      callback && callback(password.data);
    } else {
      throw password;
    }
  } catch (error) {
    onError(error);
  }
}
