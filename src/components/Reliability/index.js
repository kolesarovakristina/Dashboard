import React from "react";
import PropTypes from "prop-types";
import ReliabilityPieChart from "./ReliabilityPieChart";
import ReliabilityLineChart from "./ReliabilityLineChart";
import { Wrapper } from "../Basic";
import NoSprints from "../Velocity/styles";
import ReliabilityTable from "./ReliabilityTable";
import {
  processDataForGraph,
  processNewSprintData,
  getGraphColorBySP,
  reliabilityPieChartCalculation
} from "../../utils/utils";

class Reliability extends React.Component {
  state = {
    sprintData: [],
    sprintDataAverage: [],
    isOnVelRelPage: true
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
    const { sprintData, sprintDataAverage, isOnVelRelPage } = this.state;
    const { themeColor, windowWidth } = this.props;
    const spct = sprintData.reduce(
      (acc, sprint) => acc + sprint.SPcompleted,
      0
    );
    const sptt = sprintData.reduce((acc, sprint) => acc + sprint.SPtaken, 0);
    const graphData = processDataForGraph(sprintData, spct, sptt, true);
    const color = getGraphColorBySP(sptt, spct);

    const tableData = sprintDataAverage.map((item, index) => {
      if (index === 0) {
        return {
          ...item,
          average: `${reliabilityPieChartCalculation(sprintData).toFixed(2)}%`
        };
      }
      return {
        ...item,
        average: `${((item.SPcompleted / item.SPtaken) * 100).toFixed(2)}%`
      };
    });

    if (sprintData.length === 0) {
      return (
        <Wrapper>
          <NoSprints dark={themeColor}>No Content</NoSprints>
        </Wrapper>
      );
    }
    return (
      <Wrapper>
        <ReliabilityPieChart
          graphData={graphData}
          fill={color}
          isOnVelRelPage={isOnVelRelPage}
          themeColor={themeColor}
          windowWidth={windowWidth}
        />
        <ReliabilityLineChart
          graphData={sprintDataAverage}
          themeColor={themeColor}
        />
        <ReliabilityTable themeColor={themeColor} graphData={tableData} />
      </Wrapper>
    );
  }
}

Reliability.propTypes = {
  fetchSprintFilteredData: PropTypes.func,
  themeColor: PropTypes.bool,
  accessToken: PropTypes.string,
  history: PropTypes.objectOf(PropTypes.any)
};

Reliability.defaultProps = {
  accessToken: null,
  fetchSprintFilteredData: () => null,
  themeColor: false,
  history: {}
};

export default Reliability;
