import UserManagmentConst from "Consts/usermanagment.const";

const initialState = {
  isUpdate: false,
  user: [],
  closeModal: false,
  usersData: [],
  responseMessage: "",
  adminsCount: 0
};

function userManagmentReducer(state = initialState, action = {}) {
  switch (action.type) {
    case UserManagmentConst.ADD_USER:
      return action.data;
    case UserManagmentConst.CLOSE_UPDATE:
      return {
        ...state,
        isUpdate: action.data,
        user: action.user
      };
    case UserManagmentConst.UPDATE_USER:
      return action.data;
    case UserManagmentConst.CLOSE_MODAL:
      return {
        ...state,
        closeModal: action.boolean
      };
    case UserManagmentConst.USER_DATA:
      return {
        ...state,
        usersData: action.data
      };
    case UserManagmentConst.RESPONSE_MESSAGE:
      return {
        ...state,
        responseMessage: action.message
      };
    case UserManagmentConst.ADMINS_COUNT:
      return {
        ...state,
        adminsCount: action.count
      };
    case UserManagmentConst.DELETE_USER:
      return action.id;

    default:
      return state;
  }
}
export default userManagmentReducer;
