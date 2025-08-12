import React from "react";

const DonorRecentActivity = ({ activities = [] }) => {
  if (!Array.isArray(activities) || activities.length === 0) {
    return (
      <p className="text-gray-500 text-center">
        No recent activity found
      </p>
    );
  }

  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h3 className="text-xl font-bold mb-4">Recent Activity</h3>
      <ul className="space-y-3">
        {activities.map((activity, index) => (
          <li
            key={index}
            className="p-3 border rounded-md hover:bg-gray-50 transition"
          >
            <p className="text-gray-700">{activity.description}</p>
            <p className="text-sm text-gray-500">{activity.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DonorRecentActivity;

