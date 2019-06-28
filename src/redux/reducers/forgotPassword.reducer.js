import ForgotPasswordConst from "Consts/forgotPassword.const";

const initialState = {};

function forgotPasswordReducer(state = initialState, action = {}) {
  switch (action.type) {
    case ForgotPasswordConst.SEND_EMAIL_SUCCESS:
      return {
        ...state,
        email: action.email
      };
    default:
      return state;
  }
}
export default forgotPasswordReducer;