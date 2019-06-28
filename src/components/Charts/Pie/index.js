import React, { Component } from "react";
import PropTypes from "prop-types";
import { ResponsiveContainer, PieChart, Pie, Sector, Cell } from "recharts";
import SelectedTeamName from "../../SelectedTeamName";
import SelectedSprintName from "../../SelectedSprintName";
import ChartLegend from "../../ChartLegend/chartLegend";
import { Wrapper, Title } from "./styles";

const renderActiveShape = props => {
  const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    value,
    themeColor
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? "start" : "end";

  return (
    <g>
      <text
        x={cx}
        y={cy}
        dy={8}
        textAnchor="middle"
        fill={fill}
        style={{ fontWeight: "bold", fontSize: "1.1em" }}
      >
        {payload.velocity} {payload.name}
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
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={fill}
        fill="none"
      />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        textAnchor={textAnchor}
        fill={themeColor ? "#444" : "white"}
      >
        {`${payload.SP}: ${value}`}
      </text>
    </g>
  );
};

class PieChartClass extends Component {
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
    const { data, fill, themeColor } = this.props;
    return (
      <Wrapper dark={themeColor}>
        <Title dark={themeColor}>
          <SelectedTeamName />
          <SelectedSprintName />
        </Title>
        <ResponsiveContainer height={400} width="100%">
          <PieChart>
            <Pie
              activeIndex={activeIndex}
              activeShape={renderActiveShape}
              onMouseEnter={this.onPieEnter}
              dataKey="value"
              data={data.map(item => ({ ...item, themeColor }))}
              innerRadius={80}
              outerRadius={150}
              fill={fill}
              themeColor={themeColor}
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
      </Wrapper>
    );
  }
}

PieChartClass.propTypes = {
  data: PropTypes.arrayOf(PropTypes.any),
  fill: PropTypes.string,
  themeColor: PropTypes.bool
};

PieChartClass.defaultProps = {
  data: [],
  themeColor: false,
  fill: ""
};

export default PieChartClass;
