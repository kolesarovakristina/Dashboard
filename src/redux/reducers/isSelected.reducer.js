import IsSelected from "Consts/isSelected.const";

const initialState = {
  allTeams: true,
  allSprints: true
};

function isSelectedReducer(state = initialState, action = {}) {
  switch (action.type) {
    case IsSelected.TEAM:
      return { ...state, allTeams: action.payload };

    case IsSelected.SPRINT:
      return { ...state, allSprints: action.payload };

    default:
      return state;
  }
}

export default isSelectedReducer;
