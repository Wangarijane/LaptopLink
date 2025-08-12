import { Routes, Route } from "react-router-dom";
import DonorLayout from "../components/donor/DonorLayout";
import DonorDashboard from "../pages/donor/DonorDashboard";
import DonorProfile from "../pages/donor/DonorProfile";
import MyDonations from "../pages/donor/MyDonations";
import DonationForm from "../pages/donor/DonationForm";
import DonorMessages from "../pages/donor/DonorMessages";

const DonorRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<DonorLayout />}>
        <Route index element={<DonorDashboard />} />
        <Route path="profile" element={<DonorProfile />} />
        <Route path="donations" element={<MyDonations />} />
        <Route path="donate" element={<DonationForm />} />
        <Route path="messages" element={<DonorMessages />} />
      </Route>
    </Routes>
  );
};

export default DonorRoutes;

