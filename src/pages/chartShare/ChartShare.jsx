import React from "react";
import BarChart from "../../components/charts/BarChart";
import { useParams } from "react-router-dom";

const ChartShare = () => {
    const {filters} = useParams()
  return (
    <div>
      <BarChart />
    </div>
  );
};

export default ChartShare;
