import React from "react";
import { useDataContext } from "../../context/Context";

const DateRangeSelector = () => {
  const { dispatch, startDate, endDate } = useDataContext();
  return (
    <div >
      <form  className="sidebar-items" onSubmit={(e) => e.preventDefault()}>
        <input
          type="date"
          value={startDate}
          onChange={(e) => {
            dispatch({ type: "SET_START_DATE", payload: e.target.value });
          }}
          required
        />
        <input
          type="date"
          value={endDate}
          onChange={(e) => {
            dispatch({ type: "SET_END_DATE", payload: e.target.value });
          }}
          required
        />
        <button onClick={() => dispatch({ type: "APPLY_DATE_FILTER" })}>
          Apply
        </button>
        <button onClick={() => dispatch({ type: "CANCEL_DATE_FILTER" })}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default DateRangeSelector;
