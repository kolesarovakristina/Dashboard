import DateRangeFilterConst from "Consts/dateRangeFilter.const";

const initialState = {
  yearFrom: new Date().getFullYear(),
  yearTo: new Date().getFullYear(),
  monthFrom: new Date().getMonth(),
  monthTo: new Date().getMonth(),
  yearOnly: new Date().getFullYear(),
};

function dateRangeFilter(state = initialState, action = {}) {
  switch (action.type) {
    case DateRangeFilterConst.MONTH_FROM:
      return { ...state, monthFrom: action.payload };
    case DateRangeFilterConst.YEAR_FROM:
      return { ...state, yearFrom: action.payload };
    case DateRangeFilterConst.MONTH_TO:
      return { ...state, monthTo: action.payload };
    case DateRangeFilterConst.YEAR_TO:
      return { ...state, yearTo: action.payload };
    case DateRangeFilterConst.YEAR_ONLY:
      return { ...state, yearOnly: action.payload };
    default:
      return state;
  }
}

export default dateRangeFilter;