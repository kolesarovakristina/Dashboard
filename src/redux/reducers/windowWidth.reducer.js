import WindowWidthConst from "../../redux/consts/windowWidth.const";

const initialState = {
  windowWidth: 0
};

function windowWidthReducer(state = initialState, action = {}) {
  switch (action.type) {
    case WindowWidthConst.WINDOW_WIDTH:
      return { ...state, windowWidth: action.width };

    default:
      return state;
  }
}
export default windowWidthReducer;
