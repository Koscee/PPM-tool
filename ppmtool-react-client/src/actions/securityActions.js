import axios from 'axios';
import dispatchAction from './dispatchHelper';
import { GET_ERRORS, REMOVE_ERRORS } from './types';

export const createNewUser = (newUser, history) => async (dispatch) => {
  try {
    await axios.post('/api/users/register', newUser);
    history.push('/login');
    dispatchAction(dispatch, REMOVE_ERRORS, {});
  } catch (error) {
    dispatchAction(dispatch, GET_ERRORS, error.response.data);
  }
};
