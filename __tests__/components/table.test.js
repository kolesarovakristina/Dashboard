import React from "react";
import { shallow } from "enzyme";
import Table from "../../src/components/TableComponent/index";
import { Title } from "../../src/components/Charts/Pie/styles";
import SelectedSprintName from "../../src/components/SelectedSprintName";
import SelectedTeamName from "../../src/components/SelectedTeamName";
import { BootstrapTable } from "react-bootstrap-table";

describe("<TableComponent/>", () => {
  const component = shallow(
    <Table
      themeColor={false}
      data={[
        { id: 1, name: "Test", role: "user" },
        { id: 2, name: "admin", role: "admin" }
      ]}
    />
  );

  it("should render table component", () => {
    expect(component.exists()).toBe(true);
  });

  it("data should be send as props to table component", () => {
    expect(component.find(BootstrapTable).props().data).toEqual([
      { id: 1, name: "Test", role: "user" },
      { id: 2, name: "admin", role: "admin" }
    ]);
  });

  it("Title component should exists", () => {
    expect(component.find(Title).exists()).toBe(true);
  });

  it("Selected sprint name and team name components should exist", () => {
    expect(component.find(SelectedSprintName).exists()).toBe(true);
    expect(component.find(SelectedTeamName).exists()).toBe(true);
  });

  it("Bootstrap table component should exists", () => {
    expect(component.find(BootstrapTable).exists()).toBe(true);
  });

  it("Bootstrap table component should not have border", () => {
    expect(component.find(BootstrapTable).props().bordered).toBeFalsy;
  });

  it("Bootstrap table component should be stripped", () => {
    expect(component.find(BootstrapTable).props().striped).toBeTruthy;
  });

  it("Bootstrap table component should has 100% width, auto height and padding top 2em", () => {
    expect(component.find(BootstrapTable).props().tableStyle).toEqual({
      width: "100%",
      height: "auto",
      paddingTop: "2em"
    });
  });

  it("Bootstrap table component should has pagination", () => {
    expect(component.find(BootstrapTable).props().pagination).toBeTruthy;
  });
});
