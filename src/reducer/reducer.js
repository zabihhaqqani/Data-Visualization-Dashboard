export const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_DATA":
      return { ...state, data: action.payload };
    case "FILTER_BY_AGE":
      return { ...state, age: action.payload };
    case "FILTER_BY_GENDER":
      return { ...state, gender: action.payload };

    case "SET_START_DATE":
      return { ...state, startDate: action.payload };
    case "SET_END_DATE":
      return { ...state, endDate: action.payload };
    case "APPLY_DATE_FILTER":
      return { ...state, applyDateFilter: true };
    case "CANCEL_DATE_FILTER":
      return { ...state, applyDateFilter: false, startDate: "", endDate: "" };
    case "CLEAR_ALL_FILTERS":
      return {
        ...state,
        age: "all",
        gender: "both",
        startDate: "",
        endDate: "",
      };
    case "SHOW_FILTERS":
      return {
        ...state,
        showFilters: true,
      };
    case "CLOSE_FILTERS":
      return {
        ...state,
        showFilters: false,
      };

    default:
      return state;
  }
};
