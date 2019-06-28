import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import FilterActions from "Actions/filter.action";
import SprintFilteredDataActions from "Actions/sprintFilteredData.action";
import IsSelectedAction from "Actions/isSelected.action";
import SelectComponent from "./parts/SelectComponent";
import SelectItem from "./parts/selectItem";
import { isUser } from "../../utils/utils";

class Filter extends React.Component {
  state = {
    options: [],
    selectedTeam: "Select Team",
    isSelectedTeam: true,
    isSelectedSprint: true
  };

  handleSprintChange = (value, label) => {
    const options = this.state.options;
    let index;
    if (options.indexOf(value, label) !== -1) {
      index = options.indexOf(value, label);
      options.splice(index, 1);
    } else {
      options.push(value, label);
    }
    this.setState({ options });
    const { sprintFilterAction } = this.props;
    sprintFilterAction(value, label);
  };

  handleTeamChange = (value, label) => {
    const { teamFilterAction } = this.props;
    teamFilterAction(value, label);
    this.setState({ selectedTeam: label });
  };

  handleSelectTeam = e => {
    this.setState({ isSelectedTeam: e.target.checked });
    if (e.target.checked) {
      this.setState({ selectedTeam: "Select Team" });
    }
  };

  handleSelectSprint = e => {
    this.setState({ isSelectedSprint: e.target.checked });
  };

  render() {
    const { selectedTeam, isSelectedTeam, isSelectedSprint } = this.state;
    const isResource =location.pathname==="/home/resource";

    const {
      sprints,
      teams,
      allTeamsAction,
      allSprintsAction,
      isTeamChecked,
      isSprintChecked,
    } = this.props;
    return (
      <div>
        {!isResource && (
      <div>
        <SelectComponent
          isUser={isUser()}
          title="Select Team:"
          nameofTeamSelector={selectedTeam}
          nameofSprintSelector=""
          value=""
          checked={isSelectedTeam}
          isSelected={isSelectedTeam}
          id="t"
          onChange={e => {
            this.handleSelectTeam(e);
            allTeamsAction(e.target.checked);
            isTeamChecked();
          }}
        >
          <div
            style={{
              width: "100%",
              padding: 5
            }}
          >
            {teams.map(item => (
              <SelectItem
                itemId={item.id}
                handleChange={this.handleTeamChange}
                value={item.teamName}
                label={item.teamName}
                key={item.id}
                multi={false}
              />
            ))}
          </div>
        </SelectComponent>

        <SelectComponent
          isAdmin
          nameofTeamSelector=""
          title="Select Sprint/s"
          nameofSprintSelector="Select Sprint"
          value=""
          checked={isSelectedSprint}
          isSelected={isSelectedSprint}
          id="s"
          onChange={e => {
            this.handleSelectSprint(e);
            allSprintsAction(e.target.checked);
            isSprintChecked();
          }}
        >
          <div
            style={{
              width: "100%",
              padding: 5
            }}
          >
            {sprints.map(item => (
              <SelectItem
                itemId={item.id}
                label={`${item.name}`}
                value={item.name}
                handleChange={this.handleSprintChange}
                key={item.id}
                multi
              />
            ))}
          </div>
        </SelectComponent>
      </div>
      )} 
      </div>
    );
  }
}

Filter.propTypes = {
  sprints: PropTypes.arrayOf(PropTypes.object).isRequired,
  teams: PropTypes.arrayOf(PropTypes.object).isRequired,
  teamFilterAction: PropTypes.func.isRequired,
  sprintFilterAction: PropTypes.func.isRequired,
  allTeamsAction: PropTypes.func.isRequired,
  allSprintsAction: PropTypes.func.isRequired,
  isTeamChecked: PropTypes.bool.isRequired,
  isSprintChecked: PropTypes.bool.isRequired,
  router: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  allTeams: state.isSelectedReducer.allTeams,
  allSprints: state.isSelectedReducer.allSprints,
  router: state.router.location.pathname
});

const mapDispatchToProps = dispatch => ({
  teamFilterAction: (team, label) => {
    dispatch(FilterActions.teamFilterAction(team, label));
    dispatch(SprintFilteredDataActions.fetchSprintFilteredData());
  },
  sprintFilterAction: (sprint, label) => {
    dispatch(FilterActions.sprintFilterAction(sprint, label));
    dispatch(SprintFilteredDataActions.fetchSprintFilteredData());
  },
  allTeamsAction: team => {
    dispatch(IsSelectedAction.allTeamsAction(team));
    if (team) {
      dispatch(SprintFilteredDataActions.fetchSprintFilteredData());
    }
  },
  allSprintsAction: sprint => {
    dispatch(IsSelectedAction.allSprintsAction(sprint));
    if (sprint) {
      dispatch(SprintFilteredDataActions.fetchSprintFilteredData());
    }
  },
  isTeamChecked: () => {
    dispatch(FilterActions.isTeamChecked());
  },
  isSprintChecked: () => {
    dispatch(FilterActions.isSprintChecked());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter);
