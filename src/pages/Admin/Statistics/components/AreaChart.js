import React from "react";
import { Line } from "react-chartjs-2";

// const AreaChart = ({ data }) => {
//   const chartData = {
//     labels: Object.keys(data),
//     datasets: [
//       {
//         label: "Зарегистрированные пользователи",
//         data: Object.values(data),
//         fill: true,
//         backgroundColor: "rgba(153, 96, 195, 0.2)",
//         borderColor: "#9960C3",
//         borderWidth: 1,
//       },
//     ],
//   };

//   const chartOptions = {
//     responsive: true,
//     maintainAspectRatio: false,
//     scales: {
//       yAxes: [
//         {
//           ticks: {
//             beginAtZero: true,
//             precision: 0,
//           },
//         },
//       ],
//     },
//     plugins: {
//         legend: {
//             display: false
//         }
//     }
//   };


//   return <Line data={chartData} options={chartOptions} />;
// };
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
    // layout: {
    //   padding: {
    //     right: 100 // add padding to the right side of the chart
    //   }
    // },
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
        display: true,
        labels: {
          // Summarize legend with a function
          generateLabels: function (chart) {
            const data = chart.data;
            if (data.labels.length && data.datasets.length) {
              return data.datasets[0].data.map((value, index) => ({
                text: `${data.labels[index]}: ${value}`,
                fillStyle: data.datasets[0].backgroundColor,
                hidden: false,
                index: index,
                lineWidth: 2,
                strokeStyle: data.datasets[0].borderColor,
              }));
            }
            return [];
          },
          fontColor: '#333', // set font color for legend labels
          font: {
            size: 14
          }, 
          boxWidth: 20,
          borderRadius: 10,
        },
        onClick: null,
        position: 'right',
        align: 'start',  
      },
    },
  };

  return <Line data={chartData} options={chartOptions} />;
};

export default AreaChart;