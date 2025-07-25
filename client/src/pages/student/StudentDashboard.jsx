// src/pages/student/StudentDashboard.jsx
import React from 'react';

const StudentDashboard = () => {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold text-gray-800">Welcome to Your Dashboard</h1>
      <p className="text-gray-600">
        Here you can manage your profile, view your laptop status, track application progress, and more.
      </p>

      {/* Example: Add quick status boxes or cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="p-4 bg-white rounded-lg shadow">
          <h2 className="font-semibold text-lg text-blue-600">Application Status</h2>
          <p className="text-gray-700 mt-2">Pending Review</p>
        </div>
        <div className="p-4 bg-white rounded-lg shadow">
          <h2 className="font-semibold text-lg text-green-600">Laptop Assigned</h2>
          <p className="text-gray-700 mt-2">Not Yet Assigned</p>
        </div>
        <div className="p-4 bg-white rounded-lg shadow">
          <h2 className="font-semibold text-lg text-purple-600">Messages</h2>
          <p className="text-gray-700 mt-2">No new messages</p>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
