import { Doughnut } from "react-chartjs-2";

const AgeDistributionChart = ({ data }) => {
  const chartData = {
    labels: ["12-15 лет", "16-19 лет", "20+"],
    datasets: [
      {
        label: "Возраст",
        data: [data.age12to15, data.age16to19, data.age20plus],
        backgroundColor: ["#9960C3", "#AFAAD0", "#F3B0C3"],
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
          position: 'right',
          align: 'start',
        },
    },
  };

  return <Doughnut data={chartData} options={chartOptions} />
};

export default AgeDistributionChart;
