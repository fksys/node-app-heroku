
import { FETCH_USER } from '../actions/types';

const initialState = {
  user: null,
};

export default function (state = initialState, action) {
  if (action.type === FETCH_USER) {
    return { ...state, user: action.payload || false };
  }
  return { ...state };
}
