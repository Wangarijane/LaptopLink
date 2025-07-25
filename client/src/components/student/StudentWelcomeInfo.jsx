// src/components/student/StudentWelcomeInfo.jsx
import React from 'react';

const StudentWelcomeInfo = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Laptop Request Details</h2>

      <div className="bg-white p-6 rounded-lg shadow space-y-4">
        <div>
          <h3 className="text-lg font-semibold text-blue-600">Request Status</h3>
          <p className="text-gray-700">Pending Review</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-green-600">Laptop Assigned</h3>
          <p className="text-gray-700">Not yet assigned</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-purple-600">Expected Delivery Date</h3>
          <p className="text-gray-700">To be confirmed</p>
        </div>
      </div>

      <div className="text-sm text-gray-500">
        If your status changes, you'll receive an update here and via email.
      </div>
    </div>
  );
};

export default StudentWelcomeInfo;

