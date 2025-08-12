import React from "react";

const DonorWelcomeInfo = ({ donorName }) => {
  return (
    <div className="bg-blue-50 p-6 rounded-xl shadow-md">
      <h2 className="text-2xl font-bold text-blue-700">
        Welcome back, {donorName}!
      </h2>
      <p className="text-gray-600 mt-2">
        Here’s a quick look at your contributions and impact.
      </p>
    </div>
  );
};

export default DonorWelcomeInfo;
