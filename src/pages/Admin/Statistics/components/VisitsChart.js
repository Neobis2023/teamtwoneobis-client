// import React from 'react';
// import { Line } from 'react-chartjs-2';

// const VisitsChart = ({ data }) => {
//   const chartData = {
//     labels: data.labels,
//     datasets: [
//       {
//         label: 'Посещения',
//         data: data.visits,
//         fill: true,
//         backgroundColor: '#FF69B459',
//         borderColor: 'rgba(255, 99, 132, 1)',
//         borderWidth: 1,
//       },
//     ],
//   };

//   const chartOptions = {
//     title: {
//         display: true,
//         text: 'Visits Over Time',
//         fontSize: 18,
//         fontColor: '#333',
//         fontFamily: 'Arial',
//       },
//     elements: {
//       line: {
//         tension: 0.2,
//       },
//     },
    // scales: {
    //   yAxes: [
    //     {
    //       ticks: {
    //         beginAtZero: true,
    //       },
    //     },
    //   ],
    // },
  //   plugins: {
  //       legend: {
  //           display: false,
  //       },
  //   }
  // };

//   return (
//     <div>
//       <Line data={chartData} options={chartOptions} />
//     </div>
//   );
// };


// export default VisitsChart;

import { useRef, useEffect } from "react";
import Chart from "chart.js/auto";

const VisitsChart = ({ data }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      const chartInstance = new Chart(chartRef.current, {
        type: "line",
        data: {
          labels: data.labels,
          datasets: [
            {
              label: 'Посещения',
              data: data.visits,
              fill: true,
              backgroundColor: '#FF69B459',
              borderColor: 'rgba(255, 99, 132, 1)',
              borderWidth: 1,
            },
          ],
        },
        options: {
          plugins: {
            title: {
              display: true,
              text: 'Visits Over Time',
              fontSize: 18,
              fontColor: '#333',
              fontFamily: 'Arial',
            },
            legend: {
              display: false,
            },
          },
          elements: {
            line: {
              tension: 0.2,
            },
          },
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
        }
      });

      return () => {
        chartInstance.destroy();
      };
    }
  }, [data])
  return <canvas ref={chartRef} />;
}  

export default VisitsChart;

