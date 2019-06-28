import React from "react";
import BarChartComponent from "Components/Charts/Bar/bar";
import { Wrapper } from "Components/Basic";
import PropTypes from "prop-types";

const VelocityBarChart = ({ graphData }) => {
  const data = graphData.map(item => {
    if (item.teamName === undefined) {
      return { ...item, name: `${item.name}` };
    }
    return { ...item, name: `${item.teamName} ${item.name}` };
  });

  return (
    <Wrapper>
      <BarChartComponent
        data={data}
        dataName="name"
        dataKey1="SPtaken"
        dataKey2="SPcompleted"
        color1="#FAD9AA"
        color2="#7AE1DD"
        height={600}
        margin={{
          top: 40,
          right: 40,
          left: 0,
          bottom: 250
        }}
      />
    </Wrapper>
  );
};

VelocityBarChart.propTypes = {
  graphData: PropTypes.arrayOf(PropTypes.any).isRequired
};

export default VelocityBarChart;
