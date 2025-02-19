/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
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

// Register chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const AdminHome = () => {
  // Fake data for products, orders, and users
  const fakeProductData = [30, 40, 45, 50, 60, 75, 85];
  const fakeOrderData = [10, 15, 20, 25, 30, 35, 40];
  const fakeUserData = [5, 10, 15, 25, 35, 45, 55];

  const [chartData, setChartData] = useState<any>(null);

  useEffect(() => {
    // Simulating the data fetching
    setChartData({
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"], // Month labels
      datasets: [
        {
          label: "Products Sold",
          data: fakeProductData,
          borderColor: "rgb(75, 192, 192)",
          backgroundColor: "rgba(75, 192, 192, 0.2)",
          fill: true,
        },
        {
          label: "Orders Processed",
          data: fakeOrderData,
          borderColor: "rgb(255, 99, 132)",
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          fill: true,
        },
        {
          label: "Users Registered",
          data: fakeUserData,
          borderColor: "rgb(153, 102, 255)",
          backgroundColor: "rgba(153, 102, 255, 0.2)",
          fill: true,
        },
      ],
    });
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Admin Dashboard</h2>

      {/* Chart */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h3 className="text-xl font-semibold mb-4">Sales and User Stats</h3>
        {chartData ? (
          <Line data={chartData} />
        ) : (
          <div>Loading chart data...</div>
        )}
      </div>

      {/* Fake Data Display */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h4 className="font-semibold">Total Products Sold</h4>
          <p>{fakeProductData.reduce((a, b) => a + b, 0)} units</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6">
          <h4 className="font-semibold">Total Orders Processed</h4>
          <p>{fakeOrderData.reduce((a, b) => a + b, 0)} orders</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6">
          <h4 className="font-semibold">Total Users Registered</h4>
          <p>{fakeUserData.reduce((a, b) => a + b, 0)} users</p>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
