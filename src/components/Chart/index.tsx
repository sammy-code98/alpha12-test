import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Chart as ReactChartJs } from "react-chartjs-2";
import "chart.js/auto";
import { useRef } from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const data = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  datasets: [
    {
      label: "Registrations",
      data: [650, 590, 800, 810, 560, 1000, 300, 40, 100, 50, 250, 234],
      fill: false,
      backgroundColor: "#8576FF",
      borderColor: "#8576FF",
    },
  ],
};

const options = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};
export default function Chart(): JSX.Element {
  const ref = useRef();

  return (
    <div className="p-4 h-fit border border-blueLight rounded-md shadow-sm">
      <div style={{ position: "relative", width: "100%", height: "100%" }}>
        <ReactChartJs type="bar" ref={ref} data={data} options={options} />
      </div>
    </div>
  );
}
