import ThemeConst from "../consts/theme.const";

function themeColorAction(booleanValue) {
  return {
    type: ThemeConst.THEME_COLOR,
    payload: booleanValue
  };
}

const ThemeActions = {
  themeColorAction
};

export default ThemeActions;
