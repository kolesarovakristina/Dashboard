import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Wrapper, Name } from "./styles";

class SelectedSprintName extends React.Component {
  render() {
    const { selectedSprintName, themeColor, allSprintsSelected, isScoreCard} = this.props;
    return (
      <Wrapper isScoreCard = {isScoreCard}>
        <Name dark={themeColor}>
        {(selectedSprintName.length < 5 ) ? `${selectedSprintName}` : "All selected sprints"}
          {allSprintsSelected}
        </Name>
        <br/>
      </Wrapper>
    );
  }
}

SelectedSprintName.propTypes = {
  themeColor: PropTypes.bool.isRequired
};
const mapStateToProps = state => ({
  selectedSprintName: state.filterReducer.selectedSprintName,
  allSprintsSelected: state.filterReducer.allSprintsSelected,
  themeColor: state.themeReducer.themeColor
});

export default connect(mapStateToProps)(SelectedSprintName);
