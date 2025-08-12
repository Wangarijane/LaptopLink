import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

// Public Pages
import LandingPage from "./pages/LandingPage";
import Register from "./pages/Register";
import Login from "./pages/Login";

// Dashboard Routes
import AdminDashboard from "./pages/AdminDashboard";
import StudentRoutes from "./routes/studentRoutes"; 
import DonorRoutes from "./routes/donorRoutes"; 

// Auth
import ProtectedRoute from "./components/auth/ProtectedRoute";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />

          {/* Protected Routes */}
          <Route
            path="/dashboard/admin"
            element={
              <ProtectedRoute allowedRole="admin">
                <AdminDashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/dashboard/student/*"
            element={
              <ProtectedRoute allowedRole="student">
                <StudentRoutes />
              </ProtectedRoute>
            }
          />

          <Route
            path="/dashboard/donor/*"
            element={
              <ProtectedRoute allowedRole="donor">
                <DonorRoutes />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
