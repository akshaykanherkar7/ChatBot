import * as types from "./auth.actionTypes";
import axios from "axios";

export const registerAPI = (userData) => (dispatch) => {
  dispatch({ type: types.REGISTER_LOADING });
  return axios
    .post("http://localhost:8080/api/v1/users/register", userData)
    .then((res) => {
      dispatch({ type: types.REGISTER_SUCCESS });
      return types.REGISTER_SUCCESS
    })
    .catch((err) => {
      dispatch({ type: types.REGISTER_FAILURE });
      console.err("registerAPIFailed", err.message);
    });
};

export const userLoginAPI = (userData) => (dispatch) => {
  dispatch({ type: types.LOGIN_LOADING });
  return axios
    .post("http://localhost:8080/api/v1/users/register", userData)
    .then((res) => {
      dispatch({ type: types.LOGIN_SUCCESS, payload: res.data });
      return types.LOGIN_SUCCESS
    })
    .catch((err) => {
      dispatch({ type: types.LOGIN_FAILURE });
      console.err("userLoginAPIFailed", err.message);
    });
};
