// src/pages/Register.jsx
import { useState } from "react";
import RoleSelector from "../components/auth/RoleSelector";
import RegisterForm from "../components/auth/RegisterForm";
import AuthLayout from "../layouts/AuthLayout";

const Register = () => {
  const [role, setRole] = useState("student");

  return (
    <AuthLayout type="register">
      <RoleSelector selectedRole={role} onChange={setRole} />
      <RegisterForm role={role} />
    </AuthLayout>
  );
};

export default Register;
