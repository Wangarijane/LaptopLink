import React, { useContext } from "react";
import DonorWelcomeInfo from "../../components/donor/DonorWelcomeInfo";
import DonorDashboardStats from "../../components/donor/DonorDashboardStats";
import DonorRecentActivity from "../../components/donor/DonorRecentActivity";
import { AuthContext } from "../../context/AuthContext";

const DonorDashboard = () => {
  const { user } = useContext(AuthContext);

  const stats = [
    { label: "Total Donations", value: 12 },
    { label: "Total Amount Donated", value: "$3,500" },
    { label: "Active Campaigns", value: 4 },
  ];

  const activities = [
    { description: "Donated $250 to Education Fund", date: "2025-08-05" },
    { description: "Donated $100 to Medical Aid", date: "2025-08-01" },
    { description: "Created a recurring donation", date: "2025-07-25" },
  ];

  return (
    <div className="space-y-6">
      <DonorWelcomeInfo donorName={user?.name || "Valued Donor"} />
      <DonorDashboardStats stats={stats} />
      <DonorRecentActivity activities={activities} />
    </div>
  );
};

export default DonorDashboard;
