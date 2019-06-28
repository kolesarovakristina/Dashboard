import React from "react";
import { shallow } from "enzyme";
import { Title } from "../../src/components/Charts/Pie/styles";
import SelectedSprintName from "../../src/components/SelectedSprintName";
import SelectedTeamName from "../../src/components/SelectedTeamName";
import { ResponsiveContainer, LineChart } from "recharts";
import Wrapper from "../../src/components/Charts/Line/styles";
import LineChartComponent from "../../src/components/Charts/Line/line";

describe("<LineChart/>", () => {
  const component = shallow(
    <LineChartComponent
      data={[
        { name: "Page A", uv: 4000, pv: 2400 },
        { name: "Page B", uv: 3000, pv: 1398 },
        { name: "Page C", uv: 2000, pv: 9800 }
      ]}
      margin={{
        top: 40,
        right: 40,
        left: 0,
        bottom: 130
      }}
      themeColor={false}
    />
  );

  it("should render line chart component", () => {
    expect(component.exists()).toBe(true);
  });

  it("Title component should exists", () => {
    expect(component.find(Title).exists()).toBe(true);
  });

  it("Responsive container should has width 100% and max height 550px", () => {
    expect(component.find(ResponsiveContainer).props().width).toEqual("100%");
    expect(component.find(ResponsiveContainer).props().maxHeight).toEqual(500);
  });

  it("Selected sprint name and team name components should exist", () => {
    expect(component.find(SelectedSprintName).exists()).toBe(true);
    expect(component.find(SelectedTeamName).exists()).toBe(true);
  });

  it("theme color props should be false", () => {
    expect(component.find(Wrapper).props().themeColor).toBeFalsy;
  });

  it("margin props should be top:40px, right: 40px, left: 0, bottom: 130px", () => {
    expect(component.find(LineChart).props().margin).toEqual({
      top: 40,
      right: 40,
      left: 0,
      bottom: 130
    });
  });

  it("data should be send as props to line chart component", () => {
    expect(component.find(LineChart).props().data).toEqual([
      { name: "Page A", uv: 4000, pv: 2400 },
      { name: "Page B", uv: 3000, pv: 1398 },
      { name: "Page C", uv: 2000, pv: 9800 }
    ]);
  });
});
