import { connect } from "react-redux";
import ScoreCard from "Components/ScoreCard";
import SprintFilteredDataActions from "Actions/sprintFilteredData.action";
import WindowWidthActions from "../../redux/actions/windowWidth.action";

const mapStateToProps = state => ({
  sprintData: state.sprintFilteredDataReducer,
  accessToken: state.loginReducer.accessToken,
  themeColor: state.themeReducer.themeColor,
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
)(ScoreCard);
