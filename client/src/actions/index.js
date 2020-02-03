import axios from 'axios';
import { FETCH_USER } from './types';

export const fetchUser = () => async (dispatch, getState) => {
  try {
    const response = await axios.get('/api/current_user');
    const user = await response.data;
    return dispatch({ type: FETCH_USER, payload: user });
  } catch (e) {
    console.log('error', e);
  }
}