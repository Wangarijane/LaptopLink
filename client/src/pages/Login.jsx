// src/pages/Login.jsx
import { useState } from "react";
import RoleSelector from "../components/auth/RoleSelector";
import LoginForm from "../components/auth/LoginForm";
import AuthLayout from "../layouts/AuthLayout";

const Login = () => {
  const [role, setRole] = useState("student");

  return (
    <AuthLayout type="login">
      <RoleSelector selectedRole={role} onChange={setRole} />
      <LoginForm role={role} />
    </AuthLayout>
  );
};

export default Login;
