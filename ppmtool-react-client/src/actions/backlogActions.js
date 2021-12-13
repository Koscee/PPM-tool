import axios from 'axios';
import { successAlert } from '../components/alert';
import dispatchAction from './dispatchHelper';
import { GET_BACKLOG, GET_ERRORS, REMOVE_ERRORS } from './types';

export const addProjectTask =
  (backlog_id, project_task, history) => async (dispatch) => {
    try {
      await axios.post(`/api/backlog/${backlog_id}`, project_task);
      history.push(`/projectBoard/${backlog_id}`);
      successAlert('Task was created sucessfully!');
      dispatchAction(dispatch, REMOVE_ERRORS, {});
    } catch (error) {
      dispatchAction(dispatch, GET_ERRORS, error.response.data);
    }
  };

export const getBacklog = (backlog_id) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/backlog/${backlog_id}`);
    dispatchAction(dispatch, GET_BACKLOG, res.data);
  } catch (error) {
    dispatchAction(dispatch, GET_ERRORS, error.response.data);
  }
};
