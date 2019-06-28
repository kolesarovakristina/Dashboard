import React from "react";
import { shallow } from "enzyme";
import PieChart from "../../src/components/Charts/Pie/index";
import { Title } from "../../src/components/Charts/Pie/styles";
import SelectedSprintName from "../../src/components/SelectedSprintName";
import SelectedTeamName from "../../src/components/SelectedTeamName";
import ChartLegend from "../../src/components/ChartLegend/chartLegend";
import { ResponsiveContainer } from "recharts";
import { Pie } from "recharts";

describe("<PieChart/>", () => {
  const component = shallow(
    <PieChart
      data={[
        { name: "Group A", themeColor: false, value: 400 },
        { name: "Group B", themeColor: false, value: 300 },
        { name: "Group C", themeColor: false, value: 300 },
        { name: "Group D", themeColor: false, value: 200 }
      ]}
      themeColor={false}
      fill="#fff"
    />
  );
  it("should render pie chart component", () => {
    expect(component.exists()).toBe(true);
  });

  it("theme color props should be false", () => {
    expect(component.instance().props.themeColor).toEqual(false);
  });

  it("data should be send as props to pie chart component", () => {
    expect(component.find(Pie).props().data).toEqual([
      { name: "Group A", themeColor: false, value: 400 },
      { name: "Group B", themeColor: false, value: 300 },
      { name: "Group C", themeColor: false, value: 300 },
      { name: "Group D", themeColor: false, value: 200 }
    ]);
  });

  it("Title component should exists", () => {
    expect(component.find(Title).exists()).toBe(true);
  });

  it("fill props should be string", () => {
    expect(component.find(Pie).props().fill).toEqual("#fff");
  });

  it("ChartLegend component should exists", () => {
    expect(component.find(ChartLegend).exists()).toBe(true);
  });

  it("Responsive container should have width 100%", () => {
    expect(component.find(ResponsiveContainer).props().width).toEqual("100%");
  });

  it("Selected sprint name and team name components should exist", () => {
    expect(component.find(SelectedSprintName).exists()).toBe(true);
    expect(component.find(SelectedTeamName).exists()).toBe(true);
  });
});
