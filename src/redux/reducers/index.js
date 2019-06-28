import { combineReducers } from "redux";
import ThemeReducer from "Reducers/theme.reducer";
import SprintsReducer from "Reducers/sprint.reducer";
import TeamsReducer from "Reducers/team.reducer";
import SprintFilteredDataReducer from "Reducers/sprintFilteredData.reducer";
import FilterReducer from "Reducers/filter.reducer";
import IsSelectedReducer from "Reducers/isSelected.reducer";
import LoginReducer from "Reducers/login.reducer";
import {
  ResourceDataReducer,
  ResourceDataYearlyReducer
} from "Reducers/resource.reducer";
import dateRangeFilter from "Reducers/dateRangeFilter.reducer";
import UserManagmentReducer from "Reducers/usermanagment.reducer";
import ForgotPasswordReducer from "Reducers/forgotPassword.reducer";
import EnableUserReducer from "../reducers/enableUser.reducer";
import WindowWidthReducer from "../reducers/windowWidth.reducer";
import { routerReducer } from "react-router-redux";

const rootReducer = combineReducers({
  themeReducer: ThemeReducer,
  sprintsReducer: SprintsReducer,
  teamsReducer: TeamsReducer,
  sprintFilteredDataReducer: SprintFilteredDataReducer,
  filterReducer: FilterReducer,
  isSelectedReducer: IsSelectedReducer,
  loginReducer: LoginReducer,
  resourceReducer: ResourceDataReducer,
  resourceYearlyReducer: ResourceDataYearlyReducer,
  dateRangeFilter,
  router: routerReducer,
  userManagmentReducer: UserManagmentReducer,
  enableUserReducer: EnableUserReducer,
  forgotPasswordReducer: ForgotPasswordReducer,
  windowWidthReducer: WindowWidthReducer
});

export default rootReducer;
