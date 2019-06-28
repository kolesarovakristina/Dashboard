import React from "react";
import PieChartClass from "Components/Charts/Pie";
import { Wrapper } from "Components/Basic";
import PropTypes from "prop-types";
import ResponsivePie from "Components/Charts/ResponsivePie";
import VelocityChartLegend from "Components/Velocity/VelocityChartLegend";

class VelocityPieChart extends React.Component {
  render() {
    const {
      velocityGraphData,
      fill,
      expectedValues,
      isVelocityPieChart,
      themeColor,
      windowWidth
    } = this.props;

    if (windowWidth < 900) {
      return (
        <Wrapper>
          <ResponsivePie
            data={velocityGraphData}
            name="All Selected Sprint/s"
            fill={fill}
            expectedValues={expectedValues}
            isVelocityPieChart={isVelocityPieChart}
          />
        </Wrapper>
      );
    }

    return (
      <Wrapper dark={themeColor}>
        <PieChartClass
          data={velocityGraphData}
          fill={fill}
          themeColor={themeColor}
        />
        <VelocityChartLegend
          expectedValues={expectedValues}
          dark={themeColor}
        />
      </Wrapper>
    );
  }
}

VelocityPieChart.propTypes = {
  velocityGraphData: PropTypes.arrayOf(PropTypes.any).isRequired,
  fill: PropTypes.string.isRequired,
  expectedValues: PropTypes.objectOf(PropTypes.string).isRequired,
  isVelocityPieChart: PropTypes.bool.isRequired,
  themeColor: PropTypes.bool.isRequired
};

export default VelocityPieChart;
