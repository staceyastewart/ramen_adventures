import axios from 'axios';

export const FETCH_USERS = 'fetch_users';

const ROOT_URL = 'http://reduxblog.heroku.com/api';
const API_KEY = '?key=PAPERCLIP1234321';

export function fetchUsers() {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

  return {
    type: FETCH_USERS,
    payload: request
  };
}
