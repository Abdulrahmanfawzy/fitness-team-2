import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Line } from "react-chartjs-2";
import "../../index.css";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
);

export default function LineChartComponent() {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Sessions Over Time",
        data: [10, 20, 15, 25, 30, 40],
        borderColor: "rgba(255, 77, 77, 1)",
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: false,
      },
    },
  };

  return<div className=" mt-3 border rounded-md border-orange p-4">
    <h2 className=" mb-5 text-3xl font-bold">Sessions Over Time</h2>
    <Line height={1000} data={data} options={options} />
  </div>;
}
