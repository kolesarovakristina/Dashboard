import axios from "axios";
import { baseUrl } from "../../utils/constants";
import { getRequestHeaders } from "../../utils/utils";
import EnableUserConst from "../consts/enableUser.conts";
import UserManagmentConst from "Consts/usermanagment.const";

function responseMessageAction(message) {
  return {
    type: EnableUserConst.RESPONSE_MESSAGE,
    message
  };
}

function closeModalAction(boolean) {
  return {
    type: UserManagmentConst.CLOSE_MODAL,
    boolean
  };
}

function enableUserAction(data) {
  const password = {
    password: data[0]
  };
  const token = data[1];
  return dispatch => {
    axios
      .post(`${baseUrl}/api/v1/token/activation/${token}`, password, {
        headers: getRequestHeaders(true)
      })
      .then(response => {
        dispatch(
          responseMessageAction(
            "Registration done! Now you can login to SOVY Dashboard."
          )
        );
        dispatch(closeModalAction(true));
      })
      .catch(err => {
        if (err.response.status === 401) {
          dispatch(responseMessageAction("Token does not exists."));
          dispatch(closeModalAction(true));
        } else if (err.response.status === 403) {
          dispatch(responseMessageAction("Authentication token has expired."));
          dispatch(closeModalAction(true));
        } else {
          dispatch(
            responseMessageAction("Something went wrong, please try again.")
          );
          dispatch(closeModalAction(true));
        }
      });
  };
}

const EnableUserActions = {
  enableUserAction
};

export default EnableUserActions;
