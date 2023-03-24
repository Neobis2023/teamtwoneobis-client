// import React from 'react';
// import { Line } from 'react-chartjs-2';
// import videoicon from '../assets/images/videoicon.svg';

// const ViewsChart = ({ data, todayViews }) => {
//   const chartData = {
//     labels: data.labels,
//     datasets: [
//       {
//         label: 'Просмотры за месяц',
//         data: data.views,
//         fill: true,
//         backgroundColor: '#9960C3',
//         borderColor: 'rgba(255, 99, 132, 1)',
//         borderWidth: 1,
//       },
//     ],
//   };

//   const chartOptions = {
//     elements: {
//       line: {
//         tension: 0.5,
//       },
//     },
//     scales: {
//       yAxes: [
//         {
//           ticks: {
//             beginAtZero: true,
//           },
//         },
//       ],
//     },
//     plugins: {
//       legend: {
//         display: false,
//       },
//       tooltip: {
//         callbacks: {
//           label: function (context) {
//             const label = context.dataset.label || '';
//             if (label) {
//               return `${label}: ${context.formattedValue}`;
//             }
//             return `${context.formattedValue}`;
//           },
//         },
//       },
//     },
//   };

//   const viewsLegend = data.views.reduce((a, b) => a + b, 0);

//   return (
//     <div className='grid'>
//       <div className='flex items-center gap-4 mb-2'>
//         <img src={videoicon} alt='icon'/>
//         <div>
//           <div className='text-[#292D32] text-[0.875rem]'>
//             Всего просмотров: <br/><span className='font-bold text-[1.55rem] text-[#06152B] opacity-70'>{viewsLegend}</span> 
//           </div>
//         </div>
//         <div className='text-[#03A89E] opacity-90 font-normal text-[0.75rem]'>+{todayViews} новых просмотров</div>
//       </div>
//       <Line data={chartData} options={chartOptions} />
//     </div>
//   );
// };

// export default ViewsChart;


import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import videoicon from '../assets/images/videoicon.svg';

const ViewsChart = ({ data, todayViews }) => {
  const chartRef = useRef(null);
  const viewsLegend = data.views.reduce((a, b) => a + b, 0);

  useEffect(() => {
    if (chartRef.current) {
      const chart = new Chart(chartRef.current, {
        type: 'line',
        data: {
          labels: data.labels,
          datasets: [
            {
              label: 'Просмотры за месяц',
              data: data.views,
              fill: true,
              backgroundColor: '#9960C3',
              borderColor: 'rgba(255, 99, 132, 1)',
              borderWidth: 1,
            },
          ],
        },
        options: {
          elements: {
            line: {
              tension: 0.5,
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
          plugins: {
            legend: {
              display: false,
            },
            tooltip: {
              callbacks: {
                label: function (context) {
                  const label = context.dataset.label || '';
                  if (label) {
                    return `${label}: ${context.formattedValue}`;
                  }
                  return `${context.formattedValue}`;
                },
              },
            },
          },
        },
      });

      return () => {
        chart.destroy();
      };
    }
  }, [data]);

  return (
    <div className='grid'>
      <div className='flex items-center gap-4 mb-2'>
        <img src={videoicon} alt='icon'/>
        <div>
          <div className='text-[#292D32] text-[0.875rem]'>
            Всего просмотров: <br/><span className='font-bold text-[1.55rem] text-[#06152B] opacity-70'>{viewsLegend}</span> 
          </div>
        </div>
        <div className='text-[#03A89E] opacity-90 font-normal text-[0.75rem]'>+{todayViews} новых просмотров</div>
      </div>
      <canvas ref={chartRef} />
    </div>
  )
}
export default ViewsChart;