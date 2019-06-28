import TeamConst from "Consts/team.const";

const initialState = [];

function teamsReducer(state = initialState, action = {}) {
  switch (action.type) {
    case TeamConst.FETCH_TEAMS_SUCCESS:
      return action.data;
    default:
      return state;
  }
}
export default teamsReducer;
