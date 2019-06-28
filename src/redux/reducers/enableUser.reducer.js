import EnableUserConst from "../consts/enableUser.conts";

const initialState = {
  responseMessage: ""
};

function enableUserReducer(state = initialState, action = {}) {
  switch (action.type) {
    case EnableUserConst.RESPONSE_MESSAGE:
      return {
        ...state,
        responseMessage: action.message
      };
    default:
      return state;
  }
}

export default enableUserReducer;
