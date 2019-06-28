import LoginConst from "../consts/login.const";
import axios from "axios";
import {
  saveTokenToLocalStorage,
  removeTokenFromLocalStorage,
  loadTokenFromLocalStorage
} from "../../utils/utils";
import { baseUrl } from "../../utils/constants";

function loginAction(accessToken) {
  return {
    type: LoginConst.LOGIN_SUCCESS,
    payload: { accessToken }
  };
}
export function logoutAction() {
  return {
    type: LoginConst.LOGOUT_SUCCESS
  };
}
export function credentialsError(errMessage) {
  return {
    type: LoginConst.LOGIN_CREDENTIALS_ERROR,
    payload: { errMessage }
  };
}
export function forbiddenAccessError(errMessage) {
  return {
    type: LoginConst.LOGIN_FORBIDDEN_ERROR,
    payload: { errMessage }
  };
}
export function userNotFoundError(errMessage) {
  return {
    type: LoginConst.LOGIN_USER_NOT_FOUND_ERROR,
    payload: { errMessage }
  };
}
export function notHandledError(errMessage) {
  return {
    type: LoginConst.LOGIN_NOT_HANDLED_ERROR,
    payload: { errMessage }
  };
}

function handleLogin(username, password) {
  const loginData = new FormData();
  loginData.append("email", username);
  loginData.append("password", password);
  return dispatch => {
    axios
      .post(`${baseUrl}/api/v1/users/login`, loginData)
      .then(({ data }) => {
        saveTokenToLocalStorage(data.accessToken);
        dispatch(loginAction(data.accessToken));
      })
      .catch(err => {
        if (err.response.status === 401) {
          dispatch(credentialsError(err.errMessage));
        } else if (err.response.status === 403) {
          dispatch(forbiddenAccessError(err.errMessage));
        } else if (err.response.status === 404) {
          dispatch(userNotFoundError(err.errMessage));
        } else if (err.response.status === 400) {
          dispatch(notHandledError(err.errMessage));
        } else if (err.response.status === 500) {
          dispatch(notHandledError(err.errMessage));
        }
      });
  };
}

function handleLogout() {
  return dispatch => {
    dispatch(logoutAction());
    removeTokenFromLocalStorage();
  };
}

function handleLoadTokenFromLocalStorage() {
  return dispatch => {
    const accessToken = loadTokenFromLocalStorage();
    if (accessToken) {
      dispatch(loginAction(accessToken));
    }
  };
}

const LoginActions = {
  handleLogin,
  handleLogout,
  credentialsError,
  forbiddenAccessError,
  notHandledError,
  handleLoadTokenFromLocalStorage
};

export default LoginActions;
