import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Brush
} from "recharts";
import { Title } from "../../Charts/Pie/styles";
import PropTypes from "prop-types";
import SelectedTeamName from "../../SelectedTeamName";
import SelectedSprintName from "../../SelectedSprintName";
import Wrapper from "./styles";

const colors = [
  "#FF6633",
  "#FFB399",
  "#FF33FF",
  "#1AB399",
  "#E6B333",
  "#3366E6",
  "#999966",
  "#99FF99",
  "#B34D4D",
  "#80B300",
  "#809900",
  "#E6B3B3",
  "#6680B3",
  "#66991A",
  "#FF99E6",
  "#CCFF1A",
  "#FF1A66",
  "#E6331A",
  "#33FFCC",
  "#66994D",
  "#B366CC",
  "#4D8000",
  "#B33300",
  "#CC80CC",
  "#66664D",
  "#991AFF",
  "#E666FF",
  "#4DB3FF",
  "#FFFF99",
  "#E666B3",
  "#33991A",
  "#CC9999",
  "#B3B31A",
  "#00E680",
  "#4D8066",
  "#809980",
  "#E6FF80",
  "#1AFF33",
  "#999933",
  "#FF3380",
  "#CCCC00",
  "#66E64D",
  "#4D80CC",
  "#9900B3",
  "#E64D66",
  "#4DB380",
  "#FF4D4D",
  "#99E6E6",
  "#6666FF",
  "#00B3E6"
];

const LineChartComponent = ({ data, dataName, margin, themeColor, keys }) => (
  <Wrapper dark={themeColor}>
    <Title dark={themeColor}>
      <SelectedTeamName />
      <SelectedSprintName />
    </Title>
    <ResponsiveContainer maxHeight={500} width="100%">
      <LineChart data={data} margin={margin}>
        <XAxis
          dy={45}
          dataKey={dataName}
          angle={-70}
          textAnchor="end"
          interval={0}
          stroke={themeColor ? "darkGrey" : "lightGrey"}
        />
        <YAxis stroke={themeColor ? "darkGrey" : "lightGrey"} />
        <Brush dataKey="name" height={20} stroke="#f76f39" />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend verticalAlign="top" />
        {keys.map((key, i) => (
          <Line
            key={key}
            stroke={colors[i]}
            type="monotone"
            dataKey={key}
            activeDot={{ r: 8 }}
          />
        ))}
      </LineChart>
    </ResponsiveContainer>
  </Wrapper>
);

LineChartComponent.propTypes = {
  data: PropTypes.arrayOf(PropTypes.any),
  dataName: PropTypes.string,
  keys: PropTypes.arrayOf(PropTypes.string),
  margin: PropTypes.objectOf(PropTypes.number),
  themeColor: PropTypes.bool
};

LineChartComponent.defaultProps = {
  keys: [],
  data: [],
  themeColor: false,
  margin: null,
  dataName: ""
};

export default LineChartComponent;
