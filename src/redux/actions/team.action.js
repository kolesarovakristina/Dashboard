import TeamConst from "Consts/team.const";
import axios from "axios";
import { getRequestHeaders, handleRequestError } from "../../utils/utils";
import { baseUrl } from "../../utils/constants";

function fetchTeamSuccess(data) {
  return {
    type: TeamConst.FETCH_TEAMS_SUCCESS,
    data
  };
}

function fetchTeams() {
  return (dispatch, getState) => {
    axios(`${baseUrl}/api/v1/team/names`, { headers: getRequestHeaders(true) })
      .then(({ data }) => {
        dispatch(fetchTeamSuccess(data));
      })
      .catch((err) => {
        handleRequestError(err, dispatch);
      });
  };
}

const TeamActions = {
  fetchTeams
};

export default TeamActions;
