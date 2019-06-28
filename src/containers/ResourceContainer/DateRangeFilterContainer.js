import { connect } from "react-redux";
import DateRangeFilterActions from "Actions/dateRangeFilter.action";
import DateRangeFilter from "Components/Resource/DateRangeFilter/DateRangeFilter";

const mapStateToProps = state => ({
  themeColor: state.themeReducer.themeColor,
  dateRangeFilter: state.dateRangeFilter
});

const mapDispatchToProps = dispatch => ({
  onMonthFromChange: (value) => {
    dispatch(DateRangeFilterActions.monthFrom(value));
  },
  onYearFromChange: (value) => {
    dispatch(DateRangeFilterActions.yearFrom(value));
  },
  onYearToChange: (value) => {
    dispatch(DateRangeFilterActions.yearTo(value));
  },
  onMonthToChange: (value) => {
    dispatch(DateRangeFilterActions.monthTo(value));
  },
  onYearOnlyChange: (value) => {
    dispatch(DateRangeFilterActions.yearOnly(value));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(DateRangeFilter);
