import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Name, Wrapper } from "./styles";

const SelectedTeamName = ({ themeColor, selectedTeamName }) => (
  <Wrapper>
    <Name dark={themeColor}>
      {selectedTeamName}
    </Name>
  </Wrapper>
);
SelectedTeamName.propTypes = {
  themeColor: PropTypes.bool.isRequired,
  selectedTeamName: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  selectedTeamName: state.filterReducer.selectedTeamName,
  themeColor: state.themeReducer.themeColor
});

export default connect(mapStateToProps)(SelectedTeamName);
