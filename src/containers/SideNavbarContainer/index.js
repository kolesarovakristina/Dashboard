import SideNavbar from "Components/SideNavbar";
import FilterActions from "Actions/filter.action";
import LoginActions from "Actions/login.action";
import SprintFilteredDataActions from "Actions/sprintFilteredData.action";
import ReloadingSpredsheetDataAction from "Actions/reloadingSpredsheetData.action";
import SprintActions from "Actions/sprint.action";
import TeamActions from "Actions/team.action";
import { connect } from "react-redux";
import { decodeToken } from "../../utils/utils";
import UserManagmentActions from "../../redux/actions/usermanagment.action";

const mapStateToProps = state => ({
  themeColor: state.themeReducer.themeColor,
  sprints: state.sprintsReducer,
  teams: state.teamsReducer,
  accessToken: decodeToken(state.loginReducer.accessToken),
  selectedTeamName: state.isSelectedReducer.selectedTeamName,
  selectedSprintName: state.isSelectedReducer.selectedSprintName
});

const mapDispatchToProps = dispatch => ({
  handleLogout: (username, password) => {
    dispatch(LoginActions.handleLogout(username, password));
  },
  fetchFilterData: () => {
    dispatch(SprintActions.fetchSprints());
    dispatch(TeamActions.fetchTeams());
  },
  reloadData: () => {
    dispatch(ReloadingSpredsheetDataAction.reloadSpredsheetData());
  },
  teamFilterAction: (team, label) => {
    dispatch(FilterActions.teamFilterAction(team, label));
    dispatch(SprintFilteredDataActions.fetchSprintFilteredData());
  },
  sprintFilterAction: (sprint, label) => {
    dispatch(FilterActions.sprintFilterAction(sprint, label));
    dispatch(SprintFilteredDataActions.fetchSprintFilteredData());
  },
  closeUpdate: data => {
    dispatch(UserManagmentActions.closeUpdate(data));
  },
  closeModalAction: boolean => {
    dispatch(UserManagmentActions.closeModalAction(boolean));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SideNavbar);
