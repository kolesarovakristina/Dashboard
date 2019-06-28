import React, { Component } from "react";
import { PieChart, Pie, ResponsiveContainer, Sector, Cell } from "recharts";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ChartLegend from "../../ChartLegend/chartLegend";
import VelocityChartLegend from "../../Velocity/VelocityChartLegend";
import { Title } from "../../Charts/Pie/styles";
import SelectedTeamName from "../../SelectedTeamName";
import SelectedSprintName from "../../SelectedSprintName";
import { Wrapper, ChartsNamesWrapper } from "./styles";

const renderActiveShape = props => {
  const {
    cx,
    cy,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    SP
  } = props;

  return (
    <g>
      <text
        x={cx}
        y={cy}
        dy={8}
        textAnchor="middle"
        fill={fill}
        y="53%"
        style={{ fontWeight: "bold", fontSize: "1.1em" }}
      >
        {payload.velocity} {payload.name}
      </text>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill} y="47%">
        {SP}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
    </g>
  );
};

class ResponsivePie extends Component {
  state = {
    activeIndex: 0
  };

  onPieEnter = (data, index) => {
    this.setState({
      activeIndex: index
    });
  };

  render() {
    const { activeIndex } = this.state;
    const {
      data,
      name,
      themeColor,
      fill,
      halfWidth,
      isVelocityPieChart,
      expectedValues,
      scoreCard,
      chartsNames,
      windowWidth
    } = this.props;
    return (
      <Wrapper dark={themeColor} halfWidth={halfWidth}>
        {scoreCard ? (
          <ChartsNamesWrapper dark={themeColor}>
            {chartsNames}
          </ChartsNamesWrapper>
        ) : (
          <Title dark={themeColor}>
            <SelectedTeamName />
            <SelectedSprintName />
          </Title>
        )}

        <ResponsiveContainer
          height={windowWidth < 400 ? 270 : 400}
          width="100%"
        >
          <PieChart>
            <Pie
              activeIndex={activeIndex}
              activeShape={renderActiveShape}
              onMouseEnter={this.onPieEnter}
              data={data}
              fill={fill}
              dataKey="value"
              innerRadius={80}
              outerRadius={windowWidth < 400 ? 110 : 150}
            >
              {data.map(entry => (
                <Cell
                  key={entry.name}
                  fill={entry.noFill ? "darkgrey" : fill}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <ChartLegend dark={themeColor} />
        {isVelocityPieChart ? (
          <VelocityChartLegend
            dark={themeColor}
            expectedValues={expectedValues}
            isVelocityPieChart={isVelocityPieChart}
          />
        ) : null}
      </Wrapper>
    );
  }
}

ResponsivePie.propTypes = {
  data: PropTypes.arrayOf(PropTypes.any).isRequired,

  fill: PropTypes.string.isRequired,
  themeColor: PropTypes.bool.isRequired,

  halfWidth: PropTypes.bool,
  scoreCard: PropTypes.bool,
  windowWidth: PropTypes.number.isRequired
};

ResponsivePie.defaultProps = {
  halfWidth: false,
  scoreCard: false
};

const mapStateToProps = state => ({
  themeColor: state.themeReducer.themeColor,
  windowWidth: state.windowWidthReducer.windowWidth
});

export default connect(
  mapStateToProps,
  null
)(ResponsivePie);
