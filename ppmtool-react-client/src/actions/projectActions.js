import axios from "axios";
import { GET_ERRORS, REMOVE_ERRORS } from "./types";

export const createProject = (project, history) => async (dispatch) => {
  try {
    const res = await axios.post("http://localhost:8080/api/project", project);
    history.push("/dashboard");
  } catch (error) {
    dispatch({
      type: GET_ERRORS,
      payload: error.response.data,
    });
  }
};

export const clearFormErrors = () => (dispatch) => {
  dispatch({
    type: REMOVE_ERRORS,
    payload: {},
  });
};
