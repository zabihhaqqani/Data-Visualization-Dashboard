import { Line } from "react-chartjs-2";
import { useDataContext } from "../../context/Context";

const getValueBasedOnId = (item, id) => {
  switch (Number(id)) {
    case 0:
      return item.a;
    case 1:
      return item.b;
    case 2:
      return item.c;
    case 3:
      return item.d;
    case 4:
      return item.e;
    case 5:
      return item.f;
    default:
      return null;
  }
};

const LineChart = ({ id }) => {
  const keys = ["A", "B", "C", "D", "E", "F"];
  const { filteredData } = useDataContext();

  const resultArray = filteredData?.map((item) => getValueBasedOnId(item, id));

  const labels = filteredData?.map((item) => {
    const dateObject = new Date(item.day);
    const dayString = dateObject.toLocaleString("en-US", { weekday: "short" });
    const dayOfMonth = dateObject.getDate();
    return `${dayString} ${dayOfMonth}`;
  });

  const chartData = {
    labels: labels.splice(1),
    datasets: [
      {
        label: `Trend Timeline for Category ${keys[id]} Oct 2022`,
        data: resultArray.splice(1),
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 1.5,
        fill: false,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
      x: {
        beginAtZero: true,
      },
    },
  };
  return <Line data={chartData} options={options} />;
};

export default LineChart;
