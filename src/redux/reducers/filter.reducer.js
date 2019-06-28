import FilterConst from "Consts/filter.const";
import IsSelectedConst from "Consts/isSelected.const";
import LoginConst from "Consts/login.const";
import { decodeToken } from "../../utils/utils";

const initialState = {
  sprints: [],
  teams: null,
  selectedTeamName: "All teams",
  allSprintsSelected: "All sprints",
  selectedSprintName: []
};

function filterReducer(state = initialState, action = {}) {
  switch (action.type) {
    case FilterConst.TEAM_FILTER:
      return { ...state, selectedTeamName: action.payload.selectedTeamName, teams: action.payload.selectedTeamId };

    case FilterConst.SPRINT_FILTER:
      const sprintIdPosition = state.sprints.indexOf(action.payload.selectedSprintId);

      if (sprintIdPosition === -1) {
        return {
          ...state,
          allSprintsSelected: "",
          sprints: [...state.sprints, action.payload.selectedSprintId],
          selectedSprintName: [...state.selectedSprintName, action.payload.selectedSprintName]
        };
      }
      return {
        ...state,
        allSprintsSelected: "",
        sprints: state.sprints.filter(item => item !== action.payload.selectedSprintId),
        selectedSprintName: state.selectedSprintName.filter(item => item !== action.payload.selectedSprintName)
      };

    case IsSelectedConst.TEAM:
      return { ...state, teams: null };
    case IsSelectedConst.SPRINT:
      return { ...state, sprints: [], selectedSprintName: [] };
    case LoginConst.LOGOUT_SUCCESS:
      return initialState;
    case FilterConst.IS_TEAM_CHECKED:
      return { ...state, selectedTeamName: "All teams" };
    case FilterConst.IS_SPRINT_CHECKED:
      return { ...state, allSprintsSelected: "All sprints" };
    default:
      return state;
  }
}

export default filterReducer;
