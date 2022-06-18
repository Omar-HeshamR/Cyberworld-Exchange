import styled from "styled-components";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";

const data = {
  labels: [
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
    "Jan",
  ],
  datasets: [
    {
      fill: false,
      lineTension: 0.1,
      backgroundColor: "#FFA500",
      borderColor: "#FFA500",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "#FFA500",
      pointBackgroundColor: "#FFA500",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "#FFA500",
      pointHoverBorderColor: "#FFA50",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [11823, 15233, 15233, 16726, 17823, 20726, 25123, 26352, 28908, 30000],
    },
  ],
};

const options = {
  plugins: {
    legend: {
      display: false,
    },
  },
};

function BalanceChart() {
  return (
    <Wrapper>
      <Line data={data} options={options} width={400} height={150} />
    </Wrapper>
  );
}

export default BalanceChart;

const Wrapper = styled.div``;