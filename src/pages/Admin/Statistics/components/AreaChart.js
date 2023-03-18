import React from "react";
import { Line } from "react-chartjs-2";

const AreaChart = ({ data }) => {
  const chartData = {
    labels: Object.keys(data),
    datasets: [
      {
        label: "Зарегистрированные пользователи",
        data: Object.values(data),
        fill: true,
        backgroundColor: "rgba(153, 96, 195, 0.2)",
        borderColor: "#9960C3",
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            precision: 0,
          },
        },
      ],
    },
    plugins: {
        legend: {
            display: false
        }
    }
  };


  return <Line data={chartData} options={chartOptions} />;
};

export default AreaChart;