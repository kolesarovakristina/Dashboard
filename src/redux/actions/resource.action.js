import ResourceDataConst from "Consts/resource.const";
import axios from "axios";
import { getRequestHeaders, handleRequestError } from "../../utils/utils";
import { baseUrl } from "../../utils/constants";
import {
  getEndOfMonth,
  getEndOfYear,
  getStartOfMonth,
  getStartOfYear
} from "../../utils/time";

function fetchResourceDataSuccess(data, teamId) {
  return {
    type: ResourceDataConst.RESOURCE_DATA,
    data,
    teamId
  };
}

function fetchResourceDataYearlySuccess(data, teamId) {
  return {
    type: ResourceDataConst.RESOURCE_DATA_YEARLY,
    data,
    teamId
  };
}
function fetchResourceData(teamId, yearly = false) {
  return (dispatch, getState) => {
    const { dateRangeFilter } = getState();
    const { yearFrom, yearTo, monthFrom, monthTo, yearOnly } = dateRangeFilter;
    let roundedDateFrom;
    let roundedDateTo;
    if (yearly) {
      roundedDateFrom = getStartOfYear(new Date(yearOnly, 1));
      roundedDateTo = getEndOfYear(new Date(yearOnly, 1));
    } else {
      roundedDateFrom = getStartOfMonth(new Date(yearFrom, monthFrom));
      roundedDateTo = getEndOfMonth(new Date(yearTo, monthTo));
    }
    roundedDateFrom = roundedDateFrom.format("YYYY-MM-DD");
    roundedDateTo = roundedDateTo.format("YYYY-MM-DD");
    const queryParams = `startDate=${roundedDateFrom}&endDate=${roundedDateTo}&teamId=${teamId}`;
    axios(`${baseUrl}/api/v1/statistic?${queryParams}`, {
      headers: getRequestHeaders(true)
    })
      .then(({ data }) => {
        if (yearly) {
          dispatch(fetchResourceDataYearlySuccess(data, teamId));
        } else {
          dispatch(fetchResourceDataSuccess(data, teamId));
        }
      })
      .catch(err => {
        handleRequestError(err, dispatch);
      });
  };
}

const ResourceDataActions = {
  fetchResourceData
};

export default ResourceDataActions;
