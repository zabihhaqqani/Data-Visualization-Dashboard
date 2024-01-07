import Loader from "react-js-loader";
import { useNavigate } from "react-router-dom";
import BarChart from "../../components/charts/BarChart";
import Filters from "../../components/filters/Filters";
import { useDataContext } from "../../context/Context";
import "./Dashboard.css";

const Dashboard = () => {
  const { data, dispatch,age,gender,startDate,endDate } = useDataContext();
  const navigate = useNavigate();
  return (
    <div>
      <h2 className="logo">Interactive Data Visualization Dashboard</h2>
      <div className="dashboard-container">
        <Filters />
        <div className="bar-chart-container">
          {data?.length > 0 ? (
            <BarChart />
          ) : (
            <div className={"item"}>
              <Loader
                type="spinner-default"
                bgColor={"black"}
                color={"white"}
                title={"ping-cube"}
                size={70}
              />
            </div>
          )}

          <button onClick={() => navigate(`/chartshare/${age}/${gender}/${startDate}/${endDate}`)}>Share Chart</button>
        </div>
      </div>
      <div className="mobile-mode">
        <button onClick={() => dispatch({ type: "SHOW_FILTERS" })}>
          Filters
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
