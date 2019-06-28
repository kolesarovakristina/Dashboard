import SprintFilteredDataConst from "../consts/sprintFilteredData.const";
import axios from "axios";
import { getRequestHeaders, handleRequestError } from "../../utils/utils";
import { baseUrl } from "../../utils/constants";

function fetchSprintFilteredDataSuccess(data) {
  return {
    type: SprintFilteredDataConst.FETCH_SPRINTS_FILTERED_DATA_SUCCESS,
    data
  };
}
function fetchSprintFilteredData() {
  return (dispatch, getState) => {
    const teams = getState().filterReducer.teams;
    const sprints = getState().filterReducer.sprints.join(",");
    let queryParams = "?";

    if (getState().filterReducer.sprints.length > 0) {
      queryParams += `sprintId=${sprints}&`;
    }
    if (getState().filterReducer.teams) {
      queryParams += `teamId=${teams}`;
    }
    axios(`${baseUrl}/api/v1/sprintdata${queryParams}`, {
      headers: getRequestHeaders(true)
    })
      .then(({ data }) => {
        dispatch(
          fetchSprintFilteredDataSuccess(
            data.map(item => ({
              name: item.sprint.name,
              teamName: item.teamName,
              SPtaken: item.storyPointsTaken,
              SPcompleted: item.storyPointsClosed,
              sprintId: item.sprintId
            }))
          )
        );
      })
      .catch(err => {
        handleRequestError(err, dispatch);
      });
  };
}

const SprintFilteredDataActions = {
  fetchSprintFilteredData
};

export default SprintFilteredDataActions;
