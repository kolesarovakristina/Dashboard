import ThemeColorReducer from "../../src/redux/reducers/theme.reducer";
import ThemeConst from "../../src/redux/consts/theme.const";


describe("ThemeColor reducer", () => {
  it("can handle THEME_COLOR", () => {
    expect(
      ThemeColorReducer(undefined, {
        type: ThemeConst.THEME_COLOR,
        payload: 'test'
      })
    ).toEqual({
      themeColor: "test"
    });
  });

  it("should return the initial state", () => {
    expect(
      ThemeColorReducer(undefined,{})).toEqual({
        themeColor: false
      });
    });

  it("it should be empty initial state", () => {
    expect(
      ThemeColorReducer("another test", {
        type: "bad action"
      })
    ).toEqual("another test");
  });
});
