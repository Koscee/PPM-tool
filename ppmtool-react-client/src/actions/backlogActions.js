import axios from 'axios';
import { successAlert } from '../components/alert';

export const addProjectTask =
  (backlog_id, project_task, history) => async (dispatch) => {
    await axios.post(`/api/backlog/${backlog_id}`, project_task);
    history.push(`/projectBoard/${backlog_id}`);
    successAlert('Task was created sucessfully!');
  };
