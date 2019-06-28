import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Brush
} from "recharts";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Title } from "Components/Charts/Pie/styles";
import SelectedTeamName from "Components/SelectedTeamName";
import SelectedSprintName from "Components/SelectedSprintName";
import Wrapper from "./styles";

const BarChartComponent = ({
  data,
  dataName,
  dataKey1,
  dataKey2,
  color1,
  color2,
  height,
  margin,
  themeColor
}) => (
  <Wrapper dark={themeColor}>
    <Title dark={themeColor}>
      <SelectedTeamName />
      <SelectedSprintName />
    </Title>
    <ResponsiveContainer minHeight={height} maxHeight={600} width="100%">
      <BarChart data={data} margin={margin}>
        <CartesianGrid
          strokeDasharray="3 3"
          strokeWidth="0.5"
          vertical={false}
        />
        <XAxis
          dy={45}
          dataKey={dataName}
          angle={-75}
          textAnchor="end"
          interval={0}
          stroke={themeColor ? "darkGrey" : "lightGrey"}
        />
        <YAxis stroke={themeColor ? "darkGrey" : "lightGrey"} />
        <Brush dataKey="name" height={20} stroke="#f76f39" />
        <Tooltip />
        <Legend verticalAlign="top" />
        <Bar dataKey={dataKey1} fill={color1} />
        <Bar dataKey={dataKey2} fill={color2} />
      </BarChart>
    </ResponsiveContainer>
  </Wrapper>
);

BarChartComponent.propTypes = {
  data: PropTypes.arrayOf(PropTypes.any).isRequired,
  name: PropTypes.string.isRequired,
  dataName: PropTypes.string.isRequired,
  dataKey1: PropTypes.string.isRequired,
  dataKey2: PropTypes.string.isRequired,
  color1: PropTypes.string.isRequired,
  color2: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired,
  margin: PropTypes.objectOf(PropTypes.number).isRequired,
  themeColor: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  themeColor: state.themeReducer.themeColor
});

export default connect(
  mapStateToProps,
  null
)(BarChartComponent);
