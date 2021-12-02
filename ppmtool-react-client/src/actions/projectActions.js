import axios from "axios";
import { GET_ERRORS, GET_PROJECTS, REMOVE_ERRORS } from "./types";

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

/**
 * Sets the errors in the component props to be empty
 * this is used to clear form errors
 */
export const clearFormErrors = () => (dispatch) => {
  dispatch({
    type: REMOVE_ERRORS,
    payload: {},
  });
};

export const getProjects = () => async (dispatch) => {
  const res = await axios.get("http://localhost:8080/api/project/all");
  dispatch({
    type: GET_PROJECTS,
    payload: res.data,
  });
};
