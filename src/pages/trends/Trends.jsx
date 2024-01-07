import { useNavigate, useParams } from "react-router-dom";
import LineChart from "../../components/charts/LineChart";
import { useDataContext } from "../../context/Context";
import "./Trends.css";

const Trends = () => {
  const { data } = useDataContext();
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div>
      <div className="trends-header">
         
            {" "}
            <i
              className="fa-solid fa-arrow-left"
              onClick={() => navigate("/")}
            ></i>
          
        <h2>
          {" "}
          Trends
        </h2>
      </div>
      <div className="trends-container">{data?.length > 0 ? <LineChart id={id} /> : ""}</div>
    </div>
  );
};

export default Trends;
