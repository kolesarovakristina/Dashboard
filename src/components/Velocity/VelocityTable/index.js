import React from "react";
import Table from "Components/TableComponent";
import { Wrapper } from "Components/Basic";
import PropTypes from "prop-types";

const columns = [
  {
    path: "teamName",
    title: "Team Name",
    isKey: true,
    dataSort: true,
    filter: { type: "TextFilter" }
  },
  {
    path: "name",
    title: "Sprint Name",
    dataSort: true,
    filter: { type: "TextFilter" }
  },
  {
    title: "SP taken",
    path: "SPtaken",
    dataSort: true,
    tdStyle: { textAlign: "center" },
    thStyle: { textAlign: "center" }
  },
  {
    title: "SP completed",
    path: "SPcompleted",
    dataSort: true,
    tdStyle: { textAlign: "center" },
    thStyle: { textAlign: "center" }
  }
];

const VelocityTable = ({ graphData, themeColor }) => (
  <Wrapper>
    <Table
      themeColor={themeColor}
      data={graphData}
      columns={columns}
      name="Velocity:"
    />
  </Wrapper>
);

VelocityTable.propTypes = {
  graphData: PropTypes.arrayOf(PropTypes.any).isRequired,
  themeColor: PropTypes.bool.isRequired
};

export default VelocityTable;
