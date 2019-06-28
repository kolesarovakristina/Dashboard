import ForgotPasswordConst from "Consts/forgotPassword.const";
import UserManagmentConst from "Consts/usermanagment.const";
import axios from "axios";
import { baseUrl } from "../../utils/constants";
import { getRequestHeaders } from "../../utils/utils";


function sendEmail(email) {
    return {
      type: ForgotPasswordConst.SEND_EMAIL_SUCCESS,
      email
    };
  }
  function actionResponseMessage(message) {
    return {
      type: UserManagmentConst.RESPONSE_MESSAGE,
      message
    };
  }
function closeModalAction(boolean) {
  return {
    type: UserManagmentConst.CLOSE_MODAL,
    boolean
  };
}

function sendEmailAction(email) {
    return dispatch => {
      axios
        .get(`${baseUrl}/api/v1/users/reset/${email}`, {
          headers: getRequestHeaders(false)
        })
        .then(({ data }) => {
            dispatch(sendEmail(data.email)
            );
            dispatch(
              actionResponseMessage("Check your email! We've sent an email to the address provided.Click the link in the email to reset your password.")
            );
            dispatch(closeModalAction(true));
          })
        .catch(error => {
          dispatch(
            actionResponseMessage("Something went wrong, please try again."));
         dispatch(closeModalAction(true));
        });
    };
  }
  function resetPasswordAction(data) {
    const resetData={
      password:data[0],
      token:data[1]
    }
    return dispatch => {
      axios
        .post(`${baseUrl}/api/v1/token/reset`,resetData, {
          headers: getRequestHeaders(false)
        })
        .then(response => {
          dispatch(
            actionResponseMessage("Your password has been changed"));
            dispatch(closeModalAction(true));
        })
        .catch(err => {
          if (err.response.status === 401) {
            dispatch(actionResponseMessage("Token does not exists."));
            dispatch(closeModalAction(true));
          } else if (err.response.status === 403) {
            dispatch(actionResponseMessage("Authentication token has expired."));
            dispatch(closeModalAction(true));
          } else {
            dispatch(actionResponseMessage("Something went wrong, please try again."));
            dispatch(closeModalAction(true));
          }
      });
    };
  }
  const ForgotPasswordAction = {
    sendEmailAction,
    resetPasswordAction
  };
  
  export default ForgotPasswordAction;
  