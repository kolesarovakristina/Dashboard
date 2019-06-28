import UserManagmentConst from "Consts/usermanagment.const";
import axios from "axios";
import { baseUrl } from "../../utils/constants";
import {
  getRequestHeaders,
  handleRequestError,
  decodeToken
} from "../../utils/utils";
import LoginActions from "./login.action";

function fetchUserData(data) {
  return {
    type: UserManagmentConst.USER_DATA,
    data
  };
}

function fetchUsers() {
  return dispatch => {
    axios(`${baseUrl}/api/v1/users/getAll`, {
      headers: getRequestHeaders(true)
    })
      .then(({ data }) => {
        dispatch(fetchUserData(data));
      })
      .catch(err => {
        handleRequestError(err, dispatch);
      });
  };
}

function closeModalAction(boolean) {
  return {
    type: UserManagmentConst.CLOSE_MODAL,
    boolean
  };
}

function actionResponseMessage(message) {
  return {
    type: UserManagmentConst.RESPONSE_MESSAGE,
    message
  };
}

function addUserAction(userData) {
  return dispatch => {
    axios
      .post(`${baseUrl}/api/v1/users/addRegularUser`, userData, {
        headers: getRequestHeaders(true)
      })
      .then(response => {
        dispatch(
          actionResponseMessage("The user has been successfully created.")
        );
        dispatch(closeModalAction(true));
      })
      .catch(error => {
        dispatch(
          actionResponseMessage("Something went wrong, please try again.")
        );
        dispatch(closeModalAction(true));
      });
  };
}

function deleteUserAction(id) {
  return dispatch => {
    axios
      .delete(`${baseUrl}/api/v1/users/${id}`, {
        headers: getRequestHeaders(true)
      })
      .then(response => {
        dispatch(fetchUsers());
      })
      .catch(error => {
        alert("Something went wrong, please try again");
      });
  };
}

function areDataChanged(obj, token, prevUsername) {
  if (
    prevUsername === token.email &&
    (obj.email !== token.email ||
      obj.firstName !== token.firstName ||
      obj.teamName !== token.teamName ||
      obj.roleName !== token.auth[0].authority)
  ) {
    return true;
  } else {
    return false;
  }
}

function updateUserAction(data) {
  const id = data[0];
  const obj = data[1];
  const token = decodeToken(data[2]);
  const prevUsername = data[3];

  let message = areDataChanged(obj, token, prevUsername)
    ? (message = "The user has been successfully updated. You will be logout.")
    : (message = "The user has been successfully updated.");
  return dispatch => {
    axios
      .put(`${baseUrl}/api/v1/users/${id}`, obj, {
        headers: getRequestHeaders(true)
      })
      .then(response => {
        dispatch(actionResponseMessage(message));
        dispatch(fetchUsers());
        dispatch(closeModalAction(true));
      })
      .catch(error => {
        dispatch(
          actionResponseMessage("Something went wrong, please try again.")
        );
        dispatch(closeModalAction(true));
      });
  };
}

function closeUpdate(data, user) {
  return {
    type: UserManagmentConst.CLOSE_UPDATE,
    data,
    user
  };
}

function adminsCountAction(count) {
  return {
    type: UserManagmentConst.ADMINS_COUNT,
    count
  };
}

const UserManagmentActions = {
  addUserAction,
  deleteUserAction,
  updateUserAction,
  fetchUsers,
  closeUpdate,
  closeModalAction,
  adminsCountAction
};

export default UserManagmentActions;
