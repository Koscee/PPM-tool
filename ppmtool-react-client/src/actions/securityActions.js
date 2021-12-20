import axios from 'axios';
import jwtDecode from 'jwt-decode';
import setJwtToken from '../utils/setJwtToken';
import dispatchAction from './dispatchHelper';
import { GET_ERRORS, REMOVE_ERRORS, SET_CURRENT_USER } from './types';

export const createNewUser = (newUser, history) => async (dispatch) => {
  try {
    await axios.post('/api/users/register', newUser);
    history.push('/login');
    dispatchAction(dispatch, REMOVE_ERRORS, {});
  } catch (error) {
    dispatchAction(dispatch, GET_ERRORS, error.response.data);
  }
};

export const login = (loginRequest) => async (dispatch) => {
  try {
    // send a post request
    const res = await axios.post('/api/users/login', loginRequest);

    // extract token from res.data
    const { token } = res.data;

    // store user's token in the localStorage
    localStorage.setItem('jwtToken', token);

    // set user's token in  the header
    setJwtToken(token);

    // decode token using jwt package library
    const decodedToken = jwtDecode(token);

    // dispatch info to securityReducer
    dispatchAction(dispatch, SET_CURRENT_USER, decodedToken);
  } catch (error) {
    dispatchAction(dispatch, GET_ERRORS, error.response.data);
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem('jwtToken');
  setJwtToken(false);
  dispatchAction(dispatch, SET_CURRENT_USER, {});

  window.location.href = '/';
};
