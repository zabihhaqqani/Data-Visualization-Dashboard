import React from "react";
import { useDataContext } from "../../context/Context";

const AgeFilter = () => {
  const { age, dispatch } = useDataContext();
  return (
    <div className="sidebar-items">
      <label>
        <input
          type="radio"
          value="all"
          checked={age === "all"}
          onChange={() => dispatch({ type: "FILTER_BY_AGE", payload: "all" })}
        />
        All Ages
      </label>
      <label>
        <input
          type="radio"
          value="15-25"
          checked={age === "15-25"}
          onChange={() => dispatch({ type: "FILTER_BY_AGE", payload: "15-25" })}
        />
        15-25
      </label>

      <label>
        <input
          type="radio"
          value=">25"
          checked={age === ">25"}
          onChange={() => dispatch({ type: "FILTER_BY_AGE", payload: ">25" })}
        />
        <i className="fas fa-greater-than"></i>25
      </label>
    </div>
  );
};

export default AgeFilter;
