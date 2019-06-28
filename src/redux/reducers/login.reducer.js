import LoginConst from "Consts/login.const";

const initialState = {
  isLogged: false,
  accessToken: -1,
  errMessage: null
};

function loginReducer(state = initialState, action = {}) {
  switch (action.type) {
    case LoginConst.LOGIN_SUCCESS:
      return {
        ...state,
        isLogged: true,
        accessToken: action.payload.accessToken,
        errMessage: null
      };
    case LoginConst.LOGOUT_SUCCESS:
      return { ...state, isLogged: false, accessToken: -1 };
    case LoginConst.LOGIN_CREDENTIALS_ERROR:
      return { ...state, errMessage: "Invalid credentials.Try again." };
    case LoginConst.LOGIN_FORBIDDEN_ERROR:
      return { ...state, errMessage: "Forbidden: access is denied." };
    case LoginConst.LOGIN_NOT_HANDLED_ERROR:
      return { ...state, errMessage: "Something went wrong.Try again." };
    case LoginConst.LOGIN_USER_NOT_FOUND_ERROR:
      return { ...state, errMessage: "User not found." };
    default:
      return state;
  }
}
export default loginReducer;
