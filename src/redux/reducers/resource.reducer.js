import ResourceDataConst from "Consts/resource.const";

const initialState = {};

export function ResourceDataReducer(state = initialState, action = {}) {
  switch (action.type) {
    case ResourceDataConst.RESOURCE_DATA:
      return { ...state, [action.teamId]: action.data };
    default:
      return state;
  }
}

export function ResourceDataYearlyReducer(state = initialState, action = {}) {
  switch (action.type) {
    case ResourceDataConst.RESOURCE_DATA_YEARLY:
      return { ...state, [action.teamId]: action.data };
    default:
      return state;
  }
}
