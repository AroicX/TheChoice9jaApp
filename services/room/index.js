import requests from '../index';

export async function JOIN_ROOM(data, callback, onError) {
  try {
    let room = await requests.post(`rooms/create`, data);
    if (room.data) {
      callback && callback(room.data);
    } else {
      throw room;
    }
    return room;
  } catch (err) {
    onError && onError(err);
  }
}

export async function GET_ROOMS_BY_USER(callback, onError) {
  try {
    let rooms = await requests.get(`rooms/me`);
    if (rooms.data) {
      callback && callback(rooms.data);
    } else {
      throw rooms;
    }
    return rooms;
  } catch (err) {
    onError && onError(err);
  }
}
