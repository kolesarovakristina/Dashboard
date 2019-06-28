import React from "react";
import PieChartClass from "../../Charts/Pie";
import { Wrapper } from "../../Basic/index";
import PropTypes from "prop-types";
import ResponsivePie from "../../Charts/ResponsivePie";

class ReliabilityPieChart extends React.Component {
  render() {
    const {
      graphData,
      fill,
      isOnVelRelPage,
      themeColor,
      windowWidth
    } = this.props;

    if (windowWidth < 900) {
      return (
        <Wrapper>
          <ResponsivePie
            data={graphData}
            name="All Selected Sprint/s"
            fill={fill}
            isOnVelRelPage={isOnVelRelPage}
          />
        </Wrapper>
      );
    }

    return (
      <Wrapper>
        <PieChartClass
          data={graphData}
          name="All Selected Sprint/s"
          fill={fill}
          themeColor={themeColor}
        />
      </Wrapper>
    );
  }
}

ReliabilityPieChart.propTypes = {
  graphData: PropTypes.arrayOf(PropTypes.any).isRequired,
  fill: PropTypes.string.isRequired,
  isOnVelRelPage: PropTypes.bool.isRequired,
  windowWidth: PropTypes.number.isRequired
};

export default ReliabilityPieChart;
