// import { useEffect, useRef } from "react";
// import { Doughnut } from "react-chartjs-2";

// const AgeDistributionChart = ({ data }) => {
//   const chartRef = useRef(null);
//   const chartData = {
//     labels: ["12-15 лет", "16-19 лет", "20+"],
//     datasets: [
//       {
//         label: "Возраст",
//         data: [data.age12to15, data.age16to19, data.age20plus],
//         backgroundColor: ["#9960C3", "#AFAAD0", "#F3B0C3"],
//         borderWidth: 1,
//       },
//     ],
//   };

//   const chartOptions = {
//     responsive: true,
//     maintainAspectRatio: false,
//     plugins: {
//         legend: {
//           position: 'right',
//           align: 'start',
//         },
//     },
//   };

//   useEffect(() => {
//     if (chartRef.current) {
//       const chartInstance = chartRef.current.chartInstance;
//       if (chartInstance) {
//         chartInstance.destroy();
//       }
//     }
//   }, [data]);

//   return <Doughnut ref={chartRef} data={chartData} options={chartOptions} />
// };

// export default AgeDistributionChart;

import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const AgeDistributionChart = ({ data }) => {
  const chartRef = useRef(null);
  
  useEffect(() => {
    if (chartRef.current) {
      const chartInstance = new Chart(chartRef.current, {
        type: "doughnut",
        data: {
          labels: ["12-15 лет", "16-19 лет", "20+"],
          datasets: [
            {
              label: "Возраст",
              data: [data.age12to15, data.age16to19, data.age20plus],
              backgroundColor: ["#9960C3", "#AFAAD0", "#F3B0C3"],
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: "right",
              align: "start",
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

export default AgeDistributionChart;