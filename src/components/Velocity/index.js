import React from "react";
import VelocityPieChart from "Components/Velocity/VelocityPieChart";
import VelocityTable from "Components/Velocity/VelocityTable";
import VelocityBarChart from "Components/Velocity/VelocityBarChart";
import { Wrapper } from "Components/Basic";
import PropTypes from "prop-types";
import {
  processNewSprintData,
  processDataForVelocityGraph,
  getExpectedValuesBySP,
  getGraphColorBySP
} from "../../utils/utils";
import NoSprints from "./styles";

class Velocity extends React.Component {
  state = {
    sprintData: [],
    sprintDataAverage: [],
    isVelocityPieChart: true
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
        sprintDataAverage: processNewSprintData(sprintData),
        sprintData
      });
    }
  }

  render() {
    const { sprintData, sprintDataAverage, isVelocityPieChart } = this.state;
    const { themeColor, windowWidth } = this.props;
    const spct = sprintData.reduce(
      (acc, sprint) => acc + sprint.SPcompleted,
      0
    );
    const sptt = sprintData.reduce((acc, sprint) => acc + sprint.SPtaken, 0);

    const velocityGraphData = processDataForVelocityGraph(
      sprintData,
      sptt,
      spct
    );
    const legend = getExpectedValuesBySP(sprintData, sptt, spct);
    const color = getGraphColorBySP(sptt, spct);

    if (sprintData.length === 0) {
      return (
        <Wrapper dark={themeColor}>
          <NoSprints dark={themeColor}>No Content</NoSprints>
        </Wrapper>
      );
    }
    return (
      <Wrapper dark={themeColor}>
        <VelocityPieChart
          velocityGraphData={velocityGraphData}
          fill={color}
          expectedValues={legend}
          isVelocityPieChart={isVelocityPieChart}
          themeColor={themeColor}
          windowWidth={windowWidth}
        />
        <VelocityBarChart graphData={sprintDataAverage} />
        <VelocityTable themeColor={themeColor} graphData={sprintDataAverage} />
      </Wrapper>
    );
  }
}

Velocity.propTypes = {
  themeColor: PropTypes.bool.isRequired,
  accessToken: PropTypes.string,
  fetchSprintFilteredData: PropTypes.func.isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired
};

Velocity.defaultProps = {
  accessToken: null
};

export default Velocity;
