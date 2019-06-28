import FilterConst from "Consts/filter.const";

function teamFilterAction(value, name) {
  const teamObj = { selectedTeamName: name, selectedTeamId: value };
  return {
    type: FilterConst.TEAM_FILTER,
    payload: teamObj
  };
}

function sprintFilterAction(value, name) {
  const sprintObj = { selectedSprintName: name, selectedSprintId: value };
  return {
    type: FilterConst.SPRINT_FILTER,
    payload: sprintObj
  };
}

function isTeamChecked(value) {
  return {
    type: FilterConst.IS_TEAM_CHECKED,
    payload: value
  };
}
function isSprintChecked(value) {
  return {
    type: FilterConst.IS_SPRINT_CHECKED,
    payload: value
  };
}

const FilterActions = {
  teamFilterAction,
  sprintFilterAction,
  isTeamChecked,
  isSprintChecked
};

export default FilterActions;