import React from "react";
import LineChartComponent from "../../Charts/Line/line";
import { Wrapper } from "../../Basic";
import PropTypes from "prop-types";

const ReliabilityLineChart = ({ graphData, themeColor }) => {
  const result = {};
  graphData.forEach(value => {
    result[value.sprintId] = { name: value.name };
  });
  graphData.forEach(value => {
    let rate = 0;
    if (value.SPtaken > 0) {
      rate = Math.round((value.SPcompleted / value.SPtaken) * 100 * 100) / 100;
    }
    result[value.sprintId][value.teamName] = rate;
  });
  delete result[undefined];

  const teamNamesSet = new Set(graphData.map(item => item.teamName));
  const teamNames = [...teamNamesSet];

  if (teamNames[0] === undefined) {
    teamNames.splice(0, 1);
  }

  const resultArray = Object.values(result);

  return (
    <Wrapper>
      <LineChartComponent
        themeColor={themeColor}
        data={resultArray}
        name={
          resultArray.length > 1 ? "All Selected Sprints" : "Selected Sprint"
        }
        dataName="name"
        margin={{
          top: 40,
          right: 40,
          left: 0,
          bottom: 160
        }}
        keys={teamNames}
      />
    </Wrapper>
  );
};

ReliabilityLineChart.propTypes = {
  graphData: PropTypes.arrayOf(PropTypes.any).isRequired,
  themeColor: PropTypes.bool.isRequired
};

export default ReliabilityLineChart;
