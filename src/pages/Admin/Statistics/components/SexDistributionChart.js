// import { Bar } from "react-chartjs-2";

// const SexDistributionChart = ({ data }) => {
//   const chartData = {
//     labels: ["Женский", "Мужской"],
//     datasets: [
//       {
//         data: [data.male, data.female],
//         backgroundColor: ["#EAF0FF", "#9960C3"],
//         borderColor: "#fff",
//         borderWidth: 2,
//       },
//     ],
//   };

//   const chartOptions = {
//     responsive: true,
//     maintainAspectRatio: false,
//     plugins: {
//       legend: {
//         display: false,
//       },
//     },
//   };
//   return <Bar data={chartData} options={chartOptions} />;
// };

// export default SexDistributionChart;

import { useRef, useEffect } from "react";
import Chart from "chart.js/auto";

const SexDistributionChart = ({ data }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      const chartInstance = new Chart(chartRef.current, {
        type: "bar",
        data: {
          labels: ["Женский", "Мужской"],
          datasets: [
            {
              data: [data.male, data.female],
              backgroundColor: ["#EAF0FF", "#9960C3"],
              borderColor: "#fff",
              borderWidth: 2,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false,
            },
          },
        },
      });

      return () => {
        chartInstance.destroy();
      };
    }
  }, [data]);

  return <canvas ref={chartRef} />;
};

export default SexDistributionChart;