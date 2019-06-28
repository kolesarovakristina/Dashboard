import SprintConst from "Consts/sprint.const";
import axios from "axios";
import { getRequestHeaders, handleRequestError } from "../../utils/utils";
import { baseUrl } from "../../utils/constants";

function fetchSprintSuccess(data) {
  return {
    type: SprintConst.FETCH_SPRINTS_SUCCESS,
    data
  };
}

function fetchSprints() {
  return (dispatch, getState) => {
    axios(`${baseUrl}/api/v1/sprint/names/`, { headers: getRequestHeaders(true) })
      .then(({ data }) => {
        dispatch(fetchSprintSuccess(data));
      })
      .catch((err) => {
        handleRequestError(err, dispatch);
      });
  };
}

const SprintActions = {
  fetchSprints
};

export default SprintActions;
