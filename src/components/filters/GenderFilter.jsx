import React from "react";
import { useDataContext } from "../../context/Context";

const GenderFilter = () => {
  const { dispatch, gender } = useDataContext();
  return (
    <div className="sidebar-items">
      <label>
        <input
          type="radio"
          name="gender"
          value="both"
          checked={gender === "both"}
          onChange={() =>
            dispatch({ type: "FILTER_BY_GENDER", payload: "both" })
          }
        />
        Both
      </label>

      <label>
        <input
          type="radio"
          name="gender"
          value="Male"
          checked={gender === "Male"}
          onChange={() =>
            dispatch({ type: "FILTER_BY_GENDER", payload: "Male" })
          }
        />
        Male
      </label>

      <label>
        <input
          type="radio"
          name="gender"
          value="Female"
          checked={gender === "Female"}
          onChange={() =>
            dispatch({ type: "FILTER_BY_GENDER", payload: "Female" })
          }
        />
        Female
      </label>
    </div>
  );
};

export default GenderFilter;
