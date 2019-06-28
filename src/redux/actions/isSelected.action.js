import IsSelected from "Consts/isSelected.const";

function allTeamsAction(value) {
  return {
    type: IsSelected.TEAM,
    payload: value
  };
}

function allSprintsAction(value) {
  return {
    type: IsSelected.SPRINT,
    payload: value
  };
}

const IsSelectedActions = {
  allTeamsAction,
  allSprintsAction
};

export default IsSelectedActions;
