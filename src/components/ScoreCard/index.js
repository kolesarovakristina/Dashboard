import React from "react";
import PropTypes from "prop-types";
import PieChart from "Components/ScoreCard/ScoreCardPieChart";
import { Wrapper } from "Components/Basic";
import NoSprints from "Components/Velocity/styles";
import SelectedTeamName from "Components/SelectedTeamName";
import SelectedSprintName from "Components/SelectedSprintName";
import VelocityChartLegend from "Components/Velocity/VelocityChartLegend";
import {
  processDataForGraph,
  processDataForVelocityGraph,
  getExpectedValuesBySP,
  getGraphColorBySP
} from "../../utils/utils";
import { CustomerPerspective, Title, NameWrapper } from "./styles";

class ScoreCard extends React.Component {
  state = {
    sprintData: []
  };

  componentDidMount() {
    const { fetchSprintFilteredData, accessToken, history } = this.props;
    fetchSprintFilteredData();
    if (accessToken === -1) {
      history.push("/login");
    }
  }

  componentWillReceiveProps(nextprops) {
    const { length } = this.state;
    const { history } = this.props;
    if (nextprops.accessToken === -1) {
      history.push("/login");
    }
    if (nextprops.sprintData.length !== length) {
      const { sprintData } = nextprops;
      this.setState({
        sprintData
      });
    }
  }

  render() {
    const { sprintData } = this.state;

    const { themeColor, windowWidth } = this.props;
    const spct = sprintData.reduce(
      (acc, sprint) => acc + sprint.SPcompleted,
      0
    );
    const sptt = sprintData.reduce((acc, sprint) => acc + sprint.SPtaken, 0);
    const graphData = processDataForGraph(sprintData, spct, sptt);
    const velocityGraphData = processDataForVelocityGraph(
      sprintData,
      sptt,
      spct
    );
    const legend = getExpectedValuesBySP(sprintData, sptt, spct);
    const color = getGraphColorBySP(sptt, spct);

    if (sprintData.length === 0) {
      return (
        <Wrapper>
          <NoSprints dark={themeColor}>No Content</NoSprints>
        </Wrapper>
      );
    }
    return (
      <Wrapper dark={themeColor}>
        <CustomerPerspective>
          <Title dark={themeColor}>{"Customer Perspective "}</Title>{" "}
          <NameWrapper dark={themeColor}>
            {"Team(s): "}
            <SelectedTeamName />
          </NameWrapper>
          <NameWrapper dark={themeColor}>
            {"Sprint(s): "}
            <SelectedSprintName isScoreCard />
          </NameWrapper>
        </CustomerPerspective>

        <PieChart
          chartsNames="Reliability"
          name="Reliability"
          graphData={graphData}
          fill={color}
          scoreCard
          windowWidth={windowWidth}
        />

        <PieChart
          chartsNames="Velocity"
          name="Velocity"
          graphData={velocityGraphData}
          fill={color}
          scoreCard
          windowWidth={windowWidth}
        />
        <VelocityChartLegend dark={themeColor} expectedValues={legend} />
      </Wrapper>
    );
  }
}

ScoreCard.propTypes = {
  fetchSprintFilteredData: PropTypes.func.isRequired,
  themeColor: PropTypes.bool.isRequired,
  accessToken: PropTypes.string,

  history: PropTypes.objectOf(PropTypes.any).isRequired,
  windowWidth: PropTypes.number.isRequired
};

ScoreCard.defaultProps = {
  accessToken: null
};

export default ScoreCard;
