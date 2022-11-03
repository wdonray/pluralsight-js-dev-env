import 'whatwg-fetch';
import { del, get } from './handler';

export const getUsers = () => {
  return get('users');
}

export const deleteUser = (id) => {
  return del(`users/${id}`);
}
