import React from "react";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import _ from "lodash";
import PropTypes from "prop-types";
import { Title } from "../../components/Charts/Pie/styles";
import SelectedTeamName from "../../components/SelectedTeamName";
import SelectedSprintName from "../../components/SelectedSprintName";
import Wrapper from "./styles";

const tableColumn = columns =>
  _.map(columns, column => (
    <TableHeaderColumn
      dataField={column.path}
      dataFormat={column.dataFormat}
      formatExtraData={column}
      isKey={column.isKey}
      key={column.path}
      row={column.row}
      colSpan={column.colSpan}
      dataSort={column.dataSort}
      filter={column.filter}
      tdStyle={column.tdStyle}
      thStyle={column.thStyle}
      hidden={column.hidden}
    >
      {column.title}
    </TableHeaderColumn>
  ));

const TableComponent = ({
  data,
  columns,
  themeColor,
  isResourcePage,
  tableTitle
}) => (
  <Wrapper dark={themeColor}>
    {isResourcePage ? (
      <Title dark={themeColor}>{tableTitle}</Title>
    ) : (
      <Title dark={themeColor}>
        <SelectedTeamName isResourcePage={isResourcePage} />
        <SelectedSprintName />
      </Title>
    )}

    <BootstrapTable
      bordered={false}
      tableBodyClass={themeColor ? "table-light" : "table-dark"}
      tableHeaderClass={themeColor ? "table-light" : "table-dark"}
      striped
      id="table"
      data={data}
      pagination
      tableStyle={{ width: "100%", height: "auto", paddingTop: "2em" }}
      bodyStyle={{ height: "auto" }}
    >
      {tableColumn(columns)}
    </BootstrapTable>
  </Wrapper>
);

TableComponent.propTypes = {
  data: PropTypes.arrayOf(PropTypes.any),
  columns: PropTypes.arrayOf(PropTypes.any),
  themeColor: PropTypes.bool,
  isTable: PropTypes.bool
};

TableComponent.defaultProps = {
  data: [],
  columns: [],
  themeColor: false,
  isTable: false
};
export default TableComponent;
