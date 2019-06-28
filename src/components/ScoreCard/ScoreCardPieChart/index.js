import React from "react";
import PropTypes from "prop-types";
import ResponsivePie from "Components/Charts/ResponsivePie";
class ScoreCardPieChart extends React.Component {
  render() {
    const {
      graphData,
      fill,
      name,
      expectedValues,
      isVelocityPieChart,
      scoreCard,
      chartsNames,
      windowWidth
    } = this.props;
    return (
      <ResponsivePie
        data={graphData}
        name={name}
        fill={fill}
        halfWidth={windowWidth >= 840}
        expectedValues={expectedValues}
        isVelocityPieChart={isVelocityPieChart}
        scoreCard={scoreCard}
        chartsNames={chartsNames}
      />
    );
  }
}

ScoreCardPieChart.propTypes = {
  graphData: PropTypes.arrayOf(PropTypes.any).isRequired,
  fill: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  scoreCard: PropTypes.bool
};
ScoreCardPieChart.defaultProps = {
  scoreCard: false
};

export default ScoreCardPieChart;
