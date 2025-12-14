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
  Filler,
} from "chart.js";
import { Package, ShoppingCart, Users, TrendingUp } from "lucide-react";

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const AdminHome = () => {
  const [chartData, setChartData] = useState<any>(null);

  // Simulated growth data
  const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];
  const productsSold = [30, 40, 45, 50, 60, 75, 85];
  const ordersProcessed = [10, 15, 20, 25, 30, 35, 40];
  const usersRegistered = [5, 10, 15, 25, 35, 45, 55];

  useEffect(() => {
    setChartData({
      labels,
      datasets: [
        {
          label: "Products Sold",
          data: productsSold,
          borderColor: "#ef4444", // red-500
          backgroundColor: "rgba(239, 68, 68, 0.1)",
          fill: true,
          tension: 0.4,
        },
        {
          label: "Orders Processed",
          data: ordersProcessed,
          borderColor: "#10b981", // emerald-500
          backgroundColor: "rgba(16, 185, 129, 0.1)",
          fill: true,
          tension: 0.4,
        },
        {
          label: "New Users",
          data: usersRegistered,
          borderColor: "#8b5cf6", // violet-500
          backgroundColor: "rgba(139, 92, 246, 0.1)",
          fill: true,
          tension: 0.4,
        },
      ],
    });
  }, []);

  const totalProducts = productsSold.reduce((a, b) => a + b, 0);
  const totalOrders = ordersProcessed.reduce((a, b) => a + b, 0);
  const totalUsers = usersRegistered.reduce((a, b) => a + b, 0);

  const stats = [
    {
      title: "Total Products Sold",
      value: totalProducts,
      unit: "units",
      icon: Package,
      color: "text-red-600",
      bg: "bg-red-50",
    },
    {
      title: "Orders Processed",
      value: totalOrders,
      unit: "orders",
      icon: ShoppingCart,
      color: "text-green-600",
      bg: "bg-green-50",
    },
    {
      title: "Registered Users",
      value: totalUsers,
      unit: "users",
      icon: Users,
      color: "text-purple-600",
      bg: "bg-purple-50",
    },
  ];

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      {/* Welcome Header */}
      <div className="mb-10 text-center lg:text-left">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-thin text-gray-900 mb-2">
          Admin Dashboard
        </h1>
        <p className="text-lg text-gray-600">Monitor your bicycle empire performance</p>
      </div>

      {/* Stats Cards - Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`${stat.bg} rounded-2xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow duration-300`}
          >
            <div className="flex items-center justify-between mb-4">
              <stat.icon className={`w-10 h-10 ${stat.color}`} />
              <TrendingUp className="w-6 h-6 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-700 mb-2">{stat.title}</h3>
            <div className="flex items-end gap-2">
              <span className="text-4xl font-bold text-gray-900">{stat.value}</span>
              <span className="text-lg text-gray-600 mb-1">{stat.unit}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Chart Card */}
      <div className="bg-white rounded-2xl shadow-xl p-6 lg:p-8 border border-gray-200">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Growth Overview (2025)
        </h2>
        <div className="h-80 sm:h-96 lg:h-96">
          {chartData ? (
            <Line
              data={chartData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    position: "top" as const,
                    labels: {
                      font: { size: 14 },
                      padding: 20,
                    },
                  },
                  tooltip: {
                    mode: "index",
                    intersect: false,
                  },
                },
                scales: {
                  x: {
                    grid: { display: false },
                  },
                  y: {
                    beginAtZero: true,
                    grid: { color: "rgba(0,0,0,0.05)" },
                  },
                },
              }}
            />
          ) : (
            <div className="h-full flex items-center justify-center">
              <p className="text-gray-500">Loading chart...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminHome;