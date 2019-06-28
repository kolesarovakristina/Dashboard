import { connect } from "react-redux";
import Velocity from "../../components/Velocity";
import SprintFilteredDataActions from "Actions/sprintFilteredData.action";
import WindowWidthActions from "../../redux/actions/windowWidth.action";

const mapStateToProps = state => ({
  sprintData: state.sprintFilteredDataReducer,
  themeColor: state.themeReducer.themeColor,
  accessToken: state.loginReducer.accessToken,
  windowWidth: state.windowWidthReducer.windowWidth
});

const mapDispatchToProps = dispatch => ({
  fetchSprintFilteredData: () => {
    dispatch(SprintFilteredDataActions.fetchSprintFilteredData());
  },
  handleWindowWidth: width => {
    dispatch(WindowWidthActions.handleWindowWidth(width));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Velocity);
