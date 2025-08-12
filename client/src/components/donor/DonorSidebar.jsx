import React from "react";
import { Link } from "react-router-dom";

const DonorSidebar = ({ onClose }) => {
  const linkClasses = "hover:bg-blue-600 p-2 rounded";

  return (
    <div className="bg-blue-700 text-white h-full p-6 space-y-4">
      <h2 className="text-xl font-bold">Donor Dashboard</h2>
      <nav className="flex flex-col space-y-2">
        <Link to="/dashboard/donor" className={linkClasses} onClick={onClose}>
          Dashboard
        </Link>
        <Link to="/dashboard/donor/profile" className={linkClasses} onClick={onClose}>
          Profile
        </Link>
        <Link to="/dashboard/donor/donations" className={linkClasses} onClick={onClose}>
          My Donations
        </Link>
        <Link to="/dashboard/donor/messages" className={linkClasses} onClick={onClose}>
          Messages
        </Link>
      </nav>
    </div>
  );
};

export default DonorSidebar;


