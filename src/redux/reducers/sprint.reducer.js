import SprintConst from "Consts/sprint.const";

const initialState = [];

function sprintsReducer(state = initialState, action = {}) {
  switch (action.type) {
    case SprintConst.FETCH_SPRINTS_SUCCESS:
      return action.data;
    default:
      return state;
  }
}
export default sprintsReducer;
