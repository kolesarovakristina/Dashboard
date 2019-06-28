import React from "react";
import Table from "../../TableComponent/index";
import { Wrapper } from "../../Basic";
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
  },
  {
    title: "Reliability",
    path: "average",
    dataSort: true,
    tdStyle: { textAlign: "center" },
    thStyle: { textAlign: "center" }
  }
];

const ReliabilityTable = ({ graphData, themeColor }) => (
  <Wrapper>
    <Table
      themeColor={themeColor}
      data={graphData}
      columns={columns}
      name="All Selected Sprint/s"
    />
  </Wrapper>
);
ReliabilityTable.propTypes = {
  graphData: PropTypes.arrayOf(PropTypes.any).isRequired
};
export default ReliabilityTable;
