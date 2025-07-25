// src/routes/studentRoutes.jsx
import { Routes, Route } from "react-router-dom";
import StudentLayout from "../components/student/StudentLayout";
import StudentDashboard from "../pages/student/StudentDashboard";
import StudentProfileForm from "../pages/student/StudentProfileForm";
import StudentWelcomeInfo from "../components/student/StudentWelcomeInfo";

// Optional placeholders
import StatusPage from "../pages/student/StatusPage";
import NotificationsPage from "../pages/student/NotificationsPage";
import SupportPage from "../pages/student/SupportPage";

const StudentRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<StudentLayout />}>
        <Route index element={<StudentDashboard />} />
        <Route path="profile" element={<StudentProfileForm />} />
        <Route path="laptop" element={<StudentWelcomeInfo />} />
        <Route path="status" element={<StatusPage />} />
        <Route path="notifications" element={<NotificationsPage />} />
        <Route path="support" element={<SupportPage />} />
      </Route>
    </Routes>
  );
};

export default StudentRoutes;



