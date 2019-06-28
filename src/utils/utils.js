import jwtDecode from "jwt-decode";
import { logoutAction } from "../redux/actions/login.action";
import { formatDate } from "./time";

export const reliabilityPieChartCalculation = sprintData => {
  const obj = sprintData.filter(item => item.SPtaken !== 0);
  const average = obj.reduce((acc, sprint) => {
    return (acc += (sprint.SPcompleted / sprint.SPtaken) * 100);
  }, 0);
  return average / obj.length;
};

export const processDataForGraph = (sprintData, spct, sptt) => {
  const graphData = [];
  graphData.push(
    {
      name: `${reliabilityPieChartCalculation(sprintData).toFixed(2)}%`,
      value: spct,
      SP: "SP Completed"
    },
    {
      name: `${(100 - reliabilityPieChartCalculation(sprintData)).toFixed(2)}%`,
      value: Math.round((sptt - spct) * 100) / 100,
      SP: "SP Failed",
      noFill: true
    }
  );

  return graphData;
};

export const getGraphColorBySP = (sptt, spct) => {
  const percentage = sptt > 0 ? (spct / sptt) * 100 : 0;
  let color;
  if ((percentage <= 100 && percentage >= 80) || percentage >= 100) {
    color = "rgb(26, 152, 80)";
  } else if (percentage < 80 && percentage > 60) {
    color = "rgb(243, 145, 53)";
  } else {
    color = "rgb(189, 0, 38)";
  }
  return color;
};

export const getExpectedValuesBySP = (sprintData, sptt, spct) => {
  const expectedValues = {};
  const numberOfSprints = sprintData.length;
  const average = spct / numberOfSprints;
  const maxValue = average * 1.2;
  const minValue = average * 0.98 - 1;
  expectedValues.maxValue = Math.round(maxValue * 2) / 2;
  expectedValues.minValue = Math.round(minValue * 2) / 2;

  return expectedValues;
};

export const processDataForVelocityGraph = (sprintData, sptt, spct) => {
  const velocityGraphData = [];
  const numberOfSprints = sprintData.length;
  const averageCompleted = spct / numberOfSprints;
  const averageFailed = (sptt - spct) / numberOfSprints;
  velocityGraphData.push(
    {
      name: Math.round(averageCompleted * 2) / 2,
      value: Math.round(averageCompleted * 2) / 2,
      SP: "SP Completed",
      velocity: "Average"
    },
    {
      name: Math.round(averageFailed * 2) / 2,
      value: Math.round(averageFailed * 2) / 2,
      SP: "SP Failed",
      velocity: "Average",
      noFill: true
    }
  );
  return velocityGraphData;
};

export const saveTokenToLocalStorage = accessToken => {
  window.localStorage.setItem("accessToken", accessToken);
};
export const removeTokenFromLocalStorage = accessToken => {
  window.localStorage.removeItem("accessToken", accessToken);
  window.localStorage.removeItem("role");
};

export const decodeToken = accessToken => {
  if (!accessToken) {
    return null;
  }
  try {
    return jwtDecode(accessToken);
  } catch (err) {
    return null;
  }
};
export const loadTokenFromLocalStorage = () =>
  window.localStorage.getItem("accessToken");

export const getRequestHeaders = isSecured => {
  const headers = {};
  if (isSecured) {
    headers.Authorization = `Bearer ${loadTokenFromLocalStorage()}`;
  }
  return headers;
};

export const processNewSprintData = sprintData => {
  const newSprintData = [...sprintData.filter(({ SPtaken }) => SPtaken !== 0)];
  const spct = sprintData.reduce((acc, sprint) => acc + sprint.SPcompleted, 0);
  const sptt = sprintData.reduce((acc, sprint) => acc + sprint.SPtaken, 0);
  if (sprintData.length > 1) {
    newSprintData.unshift({
      name: "All Selected Sprints (Averaged)",
      SPtaken: (sptt / sprintData.length).toFixed(2),
      SPcompleted: (spct / sprintData.length).toFixed(2)
    });
  }
  return newSprintData;
};

export const handleRequestError = (err, dispatch) => {
  switch (err.response.status) {
    case 401:
      removeTokenFromLocalStorage();
      dispatch(logoutAction());
      break;
    default:
      console.error("Not handled error: ", err);
  }
};

export const round2decimals = value => Math.round(value * 100) / 100;

export const countVacations = resourceData => {
  let vacationDays = 0;
  resourceData.forEach(item => {
    item.vacationDto.forEach(vacation => {
      vacationDays += vacation.halfDay ? 0.5 : 1;
    });
  });

  return vacationDays;
};

/**
 * Return availability in percents
 * @param resourceData
 * @returns {number}
 */
export const calculateAvailability = resourceData => {
  const workingDays = resourceData.reduce(
    (acc, item) => acc + item.workingDays,
    0
  );
  const fte = resourceData.reduce((acc, item) => acc + item.fte, 0);
  if (fte === 0) {
    return 0;
  }
  const vacationDays = countVacations(resourceData);

  const totalWorkingDays = workingDays * fte;
  const avail = (totalWorkingDays - vacationDays) / totalWorkingDays;
  return avail * 100;
};

export const prepareMonthlyTableData = (resourceData = []) => {
  // get unique keys for year-month
  let keys = resourceData.map(item => `${item.year}-${item.month + 1}`);
  keys = new Set(keys);
  keys = [...keys];

  const result = [];
  keys.forEach(month => {
    const resourceDataForMonth = resourceData.filter(
      item => month === `${item.year}-${item.month + 1}`
    );
    const monthDate = new Date(month);

    const row = {
      month: formatDate(monthDate, "MMM YYYY"),
      workingDays: resourceDataForMonth[0].workingDays,
      fte: resourceDataForMonth[0].fte,
      minAvail: "70%",
      avail: `${round2decimals(calculateAvailability(resourceDataForMonth))}%`,
      vacations: countVacations(resourceDataForMonth)
    };

    result.push(row);
  });

  return result;
};

export const isAdmin = () =>
  decodeToken(window.localStorage.getItem("accessToken")).auth.some(
    item => item.authority === "ROLE_ADMIN"
  );

export const isUser = () =>
  decodeToken(window.localStorage.getItem("accessToken")).auth.some(
    item => item.authority === "ROLE_USER"
  );

export const isTeamleader = () =>
  decodeToken(window.localStorage.getItem("accessToken")).auth.some(
    item => item.authority === "ROLE_TEAMLEADER"
  );

export const getDecocedToken = () =>
  decodeToken(window.localStorage.getItem("accessToken"));

export const handleAdminsCount = usersData => {
  return usersData.filter(item => item.roles[0].authority === "ROLE_ADMIN")
    .length;
};

export const isRouteOnWhiteList = location => {
  switch (location) {
    case "":
    case "login":
    case "enableUser":
    case "users":
    case "token":
      return true;
    default:
      return false;
  }
};
