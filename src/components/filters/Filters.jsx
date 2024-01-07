import { useDataContext } from "../../context/Context";
import AgeFilter from "./AgeFilter";
import DateRangeSelector from "./DateRangeSelector";
import "./Filters.css";
import GenderFilter from "./GenderFilter";
const Filters = () => {
  const { dispatch, clearAllFilters, showFilters } = useDataContext();

  return (
    <>
      <div className={`${!showFilters ? "sidebar" : "sidebar mobile"}`}>
        <div className="filter-header">
          {" "}
          <h3>Filters:</h3>
          <span onClick={()=>dispatch({type:"CLOSE_FILTERS"})}>
            <i className="fa-regular fa-circle-xmark"></i>
          </span>
        </div>

        <h4>Filter By Age:</h4>
        <AgeFilter />

        <h4>Filter By Gender:</h4>
        <GenderFilter />

        <h4>Filter By Date:</h4>
        <DateRangeSelector />

          <button className="clear-all-btn" onClick={clearAllFilters}>
            Clear All Filters
          </button>
        <div>
        </div>
      </div>
    </>
  );
};

export default Filters;
