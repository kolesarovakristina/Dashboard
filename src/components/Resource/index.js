import React from "react";
import { VerticalWrapper, Wrapper } from "Components/Basic";
import NoSprints from "Components/Velocity/styles";
import ScoreCardPieChart from "Components/ScoreCard/ScoreCardPieChart";
import PropTypes from "prop-types";
import DateRangeFilterContainer from "Containers/ResourceContainer/DateRangeFilterContainer";
import Table from "Components/TableComponent";
import {
  calculateAvailability,
  prepareMonthlyTableData,
  round2decimals
} from "../../utils/utils";

const columns = [
  {
    path: "month",
    title: "Month",
    isKey: true,
    dataSort: true
  },
  {
    path: "avail",
    title: "Availability",
    dataSort: true
  },
  {
    path: "fte",
    title: "FTE",
    dataSort: true,
    tdStyle: { textAlign: "center" },
    thStyle: { textAlign: "center" }
  },
  {
    path: "vacations",
    title: "Vacations",
    dataSort: true,
    tdStyle: { textAlign: "center" },
    thStyle: { textAlign: "center" }
  },
  {
    path: "workingDays",
    title: "Working days",
    dataSort: true,
    tdStyle: { textAlign: "center" },
    thStyle: { textAlign: "center" }
  },
  {
    path: "minAvail",
    title: "Min. availability",
    dataSort: true,
    tdStyle: { textAlign: "center" },
    thStyle: { textAlign: "center" }
  }
];

class Resource extends React.Component {
  state = {
    labsMonthly: [],
    vaultMonthly: [],
    labsYearly: [],
    vaultYearly: [],
    vaultMonthlyTable: []
  };

  componentDidMount() {
    const { accessToken, history } = this.props;
    if (!accessToken) {
      history.push("/login");
    }

    this.handleFilterChange();
    this.handleYearFilterChange();
  }

  componentWillReceiveProps(nextProps) {
    const { resourceData, resourceYearlyReducer } = nextProps;
    const { history } = this.props;

    if (nextProps.accessToken === -1) {
      history.push("/login");
    }
    this.setState({
      labsMonthly: this.prepareMonthlyData(resourceData, "50"),
      vaultMonthly: this.prepareMonthlyData(resourceData, "-1"),
      labsYearly: this.prepareMonthlyData(resourceYearlyReducer, "50"),
      vaultYearly: this.prepareMonthlyData(resourceYearlyReducer, "-1"),
      vaultMonthlyTable: prepareMonthlyTableData(resourceYearlyReducer["-1"])
    });
  }

  handleFilterChange = () => {
    const { fetchResourceData } = this.props;

    fetchResourceData();
  };

  handleYearFilterChange = () => {
    const { fetchResourceDataYearly } = this.props;

    fetchResourceDataYearly();
  };

  prepareMonthlyData(resourceData, teamId) {
    if (!resourceData[teamId]) {
      return [];
    }

    const availability = calculateAvailability(resourceData[teamId]);
    const data = [
      {
        name: `${round2decimals(availability)}%`,
        value: availability,
        SP: "Availability"
      },
      {
        name: `${round2decimals(100 - availability)}%`,
        value: 100 - availability,
        SP: "No available",
        noFill: true
      }
    ];
    return data;
  }

  render() {
    const { themeColor, resourceData, resourceYearlyReducer } = this.props;
    const {
      labsMonthly,
      vaultMonthly,
      labsYearly,
      vaultYearly,
      vaultMonthlyTable
    } = this.state;
    return (
      <VerticalWrapper>
        <DateRangeFilterContainer onFilterChange={this.handleFilterChange} />
        <Wrapper dark={themeColor}>
          {resourceData["50"] && (
            <ScoreCardPieChart
              graphData={labsMonthly}
              fill="rgb(26, 152, 80)"
              name="LABS Avalability (min. 70%)"
              isResourcePage
            />
          )}
          {resourceData["-1"] && (
            <ScoreCardPieChart
              graphData={vaultMonthly}
              fill="rgb(26, 152, 80)"
              name="Vault Avalability (min. 70%)"
              isResourcePage
            />
          )}
          {!resourceData["-1"] &&
            !resourceData["50"] && (
              <NoSprints dark={themeColor}>No Content</NoSprints>
            )}
        </Wrapper>
        <DateRangeFilterContainer
          onFilterChange={this.handleYearFilterChange}
          showYearOnly
        />
        <Wrapper dark={themeColor}>
          {resourceYearlyReducer["50"] && (
            <ScoreCardPieChart
              graphData={labsYearly}
              fill="rgb(26, 152, 80)"
              name="LABS Avalability (min. 70%)"
              isResourcePage
            />
          )}
          {resourceYearlyReducer["-1"] && (
            <ScoreCardPieChart
              graphData={vaultYearly}
              fill="rgb(26, 152, 80)"
              name="Vault Avalability (min. 70%)"
            />
          )}
          {!resourceYearlyReducer["-1"] &&
            !resourceYearlyReducer["50"] && (
              <NoSprints dark={themeColor}>No Content</NoSprints>
            )}
        </Wrapper>
        <Table
          themeColor={themeColor}
          data={vaultMonthlyTable}
          columns={columns}
          name="Resources monthly per year"
          isResourcePage
          tableTitle="Vacation"
        />
      </VerticalWrapper>
    );
  }
}

Resource.propTypes = {
  resourceData: PropTypes.objectOf(PropTypes.any).isRequired,
  resourceYearlyReducer: PropTypes.objectOf(PropTypes.any).isRequired,
  themeColor: PropTypes.bool.isRequired,
  accessToken: PropTypes.string,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  fetchResourceData: PropTypes.func.isRequired,
  fetchResourceDataYearly: PropTypes.func.isRequired
};

Resource.defaultProps = {
  accessToken: null
};

export default Resource;
