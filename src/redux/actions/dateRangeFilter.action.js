import DateRangeFilterConst from "Consts/dateRangeFilter.const";

function monthFrom(value) {
  return {
    type: DateRangeFilterConst.MONTH_FROM,
    payload: value
  };
}

function monthTo(value) {
  return {
    type: DateRangeFilterConst.MONTH_TO,
    payload: value
  };
}

function yearFrom(value) {
  return {
    type: DateRangeFilterConst.YEAR_FROM,
    payload: value
  };
}

function yearTo(value) {
  return {
    type: DateRangeFilterConst.YEAR_TO,
    payload: value
  };
}

function yearOnly(value) {
  return {
    type: DateRangeFilterConst.YEAR_ONLY,
    payload: value
  };
}

const DateRangeFilterActions = {
  monthFrom,
  monthTo,
  yearFrom,
  yearTo,
  yearOnly
};

export default DateRangeFilterActions;