import requests from '@/services/index';

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
