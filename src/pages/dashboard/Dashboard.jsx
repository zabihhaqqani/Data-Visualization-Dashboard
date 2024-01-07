import { useNavigate } from "react-router-dom";
import BarChart from "../../components/charts/BarChart";
import LineChart from "../../components/charts/LineChart";
import AgeFilter from "../../components/filters/AgeFilter";
import Filters from "../../components/filters/Filters";
import { useDataContext } from "../../context/Context";
import "./Dashboard.css";
import { useState } from "react";

const Dashboard = () => {
  const { data,showFilters ,dispatch} = useDataContext();

 
  return (
    <div>
      <h2 className="logo">Interactive Data Visualization Dashboard</h2>
      <div className="dashboard-container">
        <Filters  />
        <div className="bar-chart-container">
          {data?.length > 0 ? <BarChart /> : ""}
        </div>
      </div>
      <div className="mobile-mode">
        <button onClick={() => dispatch({type:"SHOW_FILTERS"})}>Filters</button>
      </div>
    </div>
  );
};

export default Dashboard;
