import SprintFilteredDataConst from "../../redux/consts/sprintFilteredData.const";

const initialState = [];

function sprintFilteredDataReducer(state = initialState, action = {}) {
  switch (action.type) {
    case SprintFilteredDataConst.FETCH_SPRINTS_FILTERED_DATA_SUCCESS:
      return action.data;
    default:
      return state;
  }
}

export default sprintFilteredDataReducer;
