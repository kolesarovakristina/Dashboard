import { connect } from "react-redux";
import LoginActions from "../../redux/actions/login.action";
import WindowWidthActions from "../../redux/actions/windowWidth.action";
import Dashboard from "../../components/Dashboard/dashboard";

const mapStateToProps = state => ({
  themeColor: state.themeReducer.themeColor,
  sprints: state.sprintReducer,
  teams: state.teamReducer,
  accessToken: state.loginReducer.accessToken
});

const mapDispatchToProps = dispatch => ({
  handleLoadTokenFromLocalStorage: () => {
    dispatch(LoginActions.handleLoadTokenFromLocalStorage());
  },
  handleWindowWidth: width => {
    dispatch(WindowWidthActions.handleWindowWidth(width));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
