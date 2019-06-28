import { connect } from "react-redux";
import LoginPage from "../../components/LoginPage";
import LoginActions from "../../redux/actions/login.action";
import FilterActions from "../../redux/actions/filter.action";
import SprintFilteredDataActions from "../../redux/actions/sprintFilteredData.action";
import { decodeToken } from "../../utils/utils";

const mapStateToProps = state => ({
  themeColor: state.themeReducer.themeColor,
  accessToken: decodeToken(state.loginReducer.accessToken),
  errMessage: state.loginReducer.errMessage
});

const mapDispatchToProps = dispatch => ({
  handleLogin: (username, password) => {
    dispatch(LoginActions.handleLogin(username, password));
  },
  teamFilterAction: (team, label) => {
    dispatch(FilterActions.teamFilterAction(team, label));
    dispatch(SprintFilteredDataActions.fetchSprintFilteredData());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage);
