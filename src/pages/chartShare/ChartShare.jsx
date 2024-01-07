import { useNavigate, useParams } from "react-router-dom";
import { useDataContext } from "../../context/Context";
import {  parseISO } from "date-fns";
import { Bar } from "react-chartjs-2";
import "./ChartShare.css";

const ChartShare = () => {
  const { data } = useDataContext();
  const navigate = useNavigate();
  const { age, gender, startDate, endDate } = useParams();

  const dateData = [...data]?.filter(
    (item) =>
      (!Number(startDate) ||
        new Date(item.day) >= parseISO(Number(startDate))) &&
      (!Number(endDate) || new Date(item.day) <= parseISO(Number(endDate)))
  );

  const filteredData = dateData?.filter(
    (item) =>
      (gender === "both" || item.gender === gender) &&
      (age === "all" || item.age === age)
  );

  const labels = data
    ?.map((item) => [item.a, item.b, item.c, item.d, item.e, item.f])
    .shift();

  const datasetsData = filteredData
    ?.map((item) => [item.a, item.b, item.c, item.d, item.e, item.f])
    .slice(1);

  const resultArray = datasetsData?.reduce((acc, curr) => {
    curr.forEach((value, index) => {
      acc[index] = (acc[index] || 0) + value;
    });
    return acc;
  }, []);

  let options = {
    responsive: true,
    indexAxis: "y",
    plugins: {
      zoom: {
        pan: {
          enabled: true,
          mode: "y", // Enable panning in the x-axis
        },
        zoom: {
          enabled: true,
          mode: "y", // Enable zooming in the x-axis
        },
      },
    },
    scales: {
      x: {
        beginAtZero: true,
        position: "left",
        scaleLabel: {
          display: true,
          labelString: "Y-axis Label",
        },
      },
      y: {
        beginAtZero: true,
        position: "left",
        scaleLabel: {
          display: true,
          labelString: "Y-axis Label",
        },
      },
    },
    title: {
      display: true,
      text: "Chart.js Bar Chart",
    },
    onClick: (event, elements) => {
      const element = elements?.find((element) => element);
      navigate(`/dashboard/${element?.index}`);
    },
  };
  const chartData = {
    labels: labels,
    datasets: [
      {
        label: "Analytics",
        data: resultArray,
        backgroundColor: [
          "#3498db",
          "#2ecc71",
          "#e74c3c",
          "#f39c12",
          "#9b59b6",
          "#2c3e50",
        ],
        borderRadius: 5,
      },
    ],
  };
  return (
    <>
      <i className="fa-solid fa-arrow-left" onClick={() => navigate("/")}></i>
      <div className="chart-share-container">
        <Bar data={chartData} options={options} />
      </div>
    </>
  );
};

export default ChartShare;
