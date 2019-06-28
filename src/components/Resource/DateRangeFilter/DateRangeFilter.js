import React from "react";
import PropTypes from "prop-types";
import { StyledSelect, Wrapper, WrapperFilter } from "Components/Resource/DateRangeFilter/styles";
import { Title } from "./styles";

const months = [
  { value: 0, label: "January" },
  { value: 1, label: "February" },
  { value: 2, label: "March" },
  { value: 3, label: "April" },
  { value: 4, label: "May" },
  { value: 5, label: "June" },
  { value: 6, label: "July" },
  { value: 7, label: "August" },
  { value: 8, label: "September" },
  { value: 9, label: "October" },
  { value: 10, label: "November" },
  { value: 11, label: "December" }
];
const years = [2017, 2018, 2019, 2020];

class DateRangeFilter extends React.Component {
  handleMonthFromChange = ({ target: { value } }) => {
    const {
      onMonthFromChange, onFilterChange, dateRangeFilter, onMonthToChange, onYearToChange
    } = this.props;
    const { yearFrom, yearTo, monthTo } = dateRangeFilter;
    const valueInt = parseInt(value, 10);
    const dateFrom = new Date(yearFrom, valueInt).getTime();
    const dateTo = new Date(yearTo, monthTo).getTime();

    onMonthFromChange(valueInt);
    if (dateFrom > dateTo) {
      onMonthToChange(valueInt);
      onYearToChange(yearFrom);
    }
    onFilterChange();
  };

  handleYearFromChange = ({ target: { value } }) => {
    const {
      onYearFromChange, onFilterChange, dateRangeFilter, onMonthToChange, onYearToChange
    } = this.props;
    const { yearTo, monthFrom, monthTo } = dateRangeFilter;
    const valueInt = parseInt(value, 10);
    const dateFrom = new Date(valueInt, monthFrom).getTime();
    const dateTo = new Date(yearTo, monthTo).getTime();

    onYearFromChange(valueInt);
    if (dateFrom > dateTo) {
      onMonthToChange(monthFrom);
      onYearToChange(valueInt);
    }
    onFilterChange();
  };

  handleMonthToChange = ({ target: { value } }) => {
    const { onMonthToChange, onFilterChange, dateRangeFilter } = this.props;
    const { yearFrom, yearTo, monthFrom } = dateRangeFilter;
    const valueInt = parseInt(value, 10);
    const dateFrom = new Date(yearFrom, monthFrom).getTime();
    const dateTo = new Date(yearTo, valueInt).getTime();

    if (dateFrom <= dateTo) {
      onMonthToChange(valueInt);
      onFilterChange();
    }
  };

  handleYearToChange = ({ target: { value } }) => {
    const { onYearToChange, onFilterChange, dateRangeFilter } = this.props;
    const { yearFrom, monthFrom, monthTo } = dateRangeFilter;
    const valueInt = parseInt(value, 10);
    const dateFrom = new Date(yearFrom, monthFrom).getTime();
    const dateTo = new Date(valueInt, monthTo).getTime();

    if (dateFrom <= dateTo) {
      onYearToChange(valueInt);
      onFilterChange();
    }
  };

  handleYearOnlyChange = ({ target: { value } }) => {
    const { onFilterChange, onYearOnlyChange } = this.props;
    const valueInt = parseInt(value, 10);

    onYearOnlyChange(valueInt);
    onFilterChange();
  };

  render() {
    const { themeColor, dateRangeFilter, showYearOnly } = this.props;
    const {
      yearFrom, yearTo, monthFrom, monthTo, yearOnly
    } = dateRangeFilter;
    return (
      <WrapperFilter dark={themeColor}>
        {!showYearOnly && (
        <Wrapper dark={themeColor}>
          <Title>
            {"Date range:"}
          </Title>
          <StyledSelect
            dark={themeColor} value={monthFrom}
            onChange={this.handleMonthFromChange}
          >
            {months.map(item => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </StyledSelect>
          <StyledSelect
            dark={themeColor} value={yearFrom}
            onChange={event => this.handleYearFromChange(event)}
          >
            {years.map(item => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </StyledSelect>
        </Wrapper>
        )}
        {!showYearOnly && (
        <Wrapper dark={themeColor}>
          -
          <StyledSelect
            dark={themeColor} value={monthTo}
            onChange={event => this.handleMonthToChange(event)}
          >
            {months.map(item => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </StyledSelect>
          <StyledSelect
            dark={themeColor} value={yearTo}
            onChange={event => this.handleYearToChange(event)}
          >
            {years.map(item => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </StyledSelect>
        </Wrapper>
        )}
        {showYearOnly && (
        <Wrapper dark={themeColor}>
          <div>
            Year
          </div>
          <StyledSelect
            dark={themeColor} value={yearOnly}
            onChange={event => this.handleYearOnlyChange(event)}
          >
            {years.map(item => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </StyledSelect>
        </Wrapper>
        )}
      </WrapperFilter>
    );
  }
}

DateRangeFilter.propTypes = {
  themeColor: PropTypes.bool.isRequired,
  showYearOnly: PropTypes.bool,
  onMonthFromChange: PropTypes.func.isRequired,
  onYearFromChange: PropTypes.func.isRequired,
  onMonthToChange: PropTypes.func.isRequired,
  onYearToChange: PropTypes.func.isRequired,
  onYearOnlyChange: PropTypes.func.isRequired,
  onFilterChange: PropTypes.func.isRequired,
  dateRangeFilter: PropTypes.shape({
    monthFrom: PropTypes.number.isRequired,
    yearFrom: PropTypes.number.isRequired,
    monthTo: PropTypes.number.isRequired,
    yearTo: PropTypes.number.isRequired
  }).isRequired
};

DateRangeFilter.defaultProps = {
  showYearOnly: false
};

export default DateRangeFilter;
