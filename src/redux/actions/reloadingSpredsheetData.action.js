import axios from "axios";
import { getRequestHeaders, handleRequestError } from "../../utils/utils";
import { baseUrl } from "../../utils/constants";

function reloadSpredsheetData() {
  return (dispatch) => {
    axios.all([
      axios(`${baseUrl}/api/v1/sprintdata/loadData`, { headers: getRequestHeaders(true) }),
      axios(`${baseUrl}/api/v1/vacation/loadVacationData`, { headers: getRequestHeaders(true) })
    ])
      .then(axios.spread(() => {
       window.location.reload();
      })).catch((err) => {
        handleRequestError(err, dispatch);
      });
  }
}

const ReloadingSpredsheetDataAction = {
  reloadSpredsheetData
};

export default ReloadingSpredsheetDataAction;
