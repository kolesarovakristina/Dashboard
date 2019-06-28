import ReliabilityReducer from "../../src/redux/reducers/sprintFilteredData.reducer";
import SprintFilteredDataConst from "../../src/redux/consts/sprintFilteredData.const";

describe("Reliability reducer", () => {
  it("can handle FETCH_SPRINTS_FILTERED_DATA_SUCCESS", () => {
    expect(
      ReliabilityReducer(undefined, {
        type: SprintFilteredDataConst.FETCH_SPRINTS_FILTERED_DATA_SUCCESS,
        data: {
          test: "test"
        }
      })
    ).toEqual({
      test: "test"
    });
  });

  it("it should be empty initial state", () => {
    expect(
      ReliabilityReducer(undefined, {
        type: "bad action"
      })
    ).toEqual([]);
  });

  it("it should be empty initial state", () => {
    expect(
      ReliabilityReducer("another test", {
        type: "bad action"
      })
    ).toEqual("another test");
  });
});
