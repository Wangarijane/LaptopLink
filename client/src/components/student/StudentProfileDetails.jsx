import React from 'react';

const StudentProfileDetails = ({ user }) => {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Your Profile Details</h2>
      <ul className="space-y-2 text-gray-700">
        <li><strong>Name:</strong> {user?.name || 'N/A'}</li>
        <li><strong>Email:</strong> {user?.email || 'N/A'}</li>
        <li><strong>Institution:</strong> {user?.institution || 'Not Provided'}</li>
        <li><strong>Request Status:</strong> {user?.requestStatus || 'Not Submitted'}</li>
      </ul>
    </div>
  );
};

export default StudentProfileDetails;
