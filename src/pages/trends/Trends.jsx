import { useNavigate, useParams } from "react-router-dom";
import LineChart from "../../components/charts/LineChart";
import { useDataContext } from "../../context/Context";
import "./Trends.css";
import Loader from "react-js-loader";

const Trends = () => {
  const { data } = useDataContext();
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div
    className="trends-main-container"
      
    >
      <div>
        <div className="trends-header">
          {" "}
          <i
            className="fa-solid fa-arrow-left"
            onClick={() => navigate("/")}
          ></i>
          <h2> Trends</h2>
        </div>
      </div>
      <div className="trends-container">
        {data?.length > 0 ? (
          <LineChart id={id} />
        ) : (
          <Loader
            type="spinner-default"
            bgColor={"black"}
            color={"white"}
            title={"ping-cube"}
            size={70}
          />
        )}
      </div>
    </div>
  );
};

export default Trends;
