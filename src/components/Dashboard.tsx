import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Dashboard: React.FC = () => {
  const chartData = {
    labels: ['Critical', 'High', 'Medium', 'Low'],
    datasets: [
      {
        label: 'Vulnerabilities',
        data: [12, 19, 3, 5],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Vulnerability Overview',
      },
    },
  };

  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <div className="chart-container">
        <Bar data={chartData} options={chartOptions} />
      </div>
      <div className="stats">
        <div className="stat-item">
          <h3>Total Products</h3>
          <p>25</p>
        </div>
        <div className="stat-item">
          <h3>Active Scans</h3>
          <p>3</p>
        </div>
        <div className="stat-item">
          <h3>Total Vulnerabilities</h3>
          <p>39</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;