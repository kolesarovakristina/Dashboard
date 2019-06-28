import WindowWidthConst from "../consts/windowWidth.const";

function handleWindowWidth(width) {
  return {
    type: WindowWidthConst.WINDOW_WIDTH,
    width
  };
}

const windowWidthActions = {
  handleWindowWidth
};

export default windowWidthActions;
