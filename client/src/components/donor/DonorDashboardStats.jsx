import React from "react";

const DonorDashboardStats = ({ stats = [] }) => {
  if (!Array.isArray(stats) || stats.length === 0) {
    return (
      <p className="text-gray-500 text-center">No stats available</p>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-white p-6 rounded-xl shadow-md text-center"
        >
          <h4 className="text-2xl font-bold text-blue-600">
            {stat.value}
          </h4>
          <p className="text-gray-600">{stat.label}</p>
        </div>
      ))}
    </div>
  );
};

export default DonorDashboardStats;

