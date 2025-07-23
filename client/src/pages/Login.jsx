// src/pages/Login.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import RoleSelector from "../components/auth/RoleSelector";
import LoginForm from "../components/auth/LoginForm";
import AuthLayout from "../layouts/AuthLayout";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const [role, setRole] = useState("student");
  const navigate = useNavigate();
  const { login } = useAuth(); // get login function from context

  const handleLogin = async ({ email, password }) => {
    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}/api/users/login`,
      { email, password, role },
      {
        headers: { "Content-Type": "application/json" },
      }
    );

    // Save to localStorage and set user in context
    login(response.data);

    // Redirect based on role
    const roleDashboardMap = {
      student: "/dashboard/student",
      admin: "/dashboard/admin",
      donor: "/dashboard/donor",
    };

    navigate(roleDashboardMap[response.data.role] || "/");
  };

  return (
    <AuthLayout type="login">
      <RoleSelector selectedRole={role} onChange={setRole} />
      <LoginForm role={role} onLogin={handleLogin} />
    </AuthLayout>
  );
};

export default Login;

