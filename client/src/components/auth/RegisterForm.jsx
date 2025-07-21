// src/components/auth/RegisterForm.jsx
import { useState } from "react";

const RegisterForm = ({ role }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const res = await fetch(`/api/user/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, role }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Registration failed");

      setSuccess("Registration successful!");
      setFormData({ name: "", email: "", password: "" });
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md w-full mx-auto bg-white p-6 rounded-lg shadow-md"
    >
      <h2 className="text-2xl font-bold mb-6 text-center text-blue-700 capitalize">
        Register as {role}
      </h2>

      {error && (
        <div className="bg-red-100 text-red-700 p-3 mb-4 rounded">
          {error}
        </div>
      )}

      {success && (
        <div className="bg-green-100 text-green-700 p-3 mb-4 rounded">
          {success}
        </div>
      )}

      <div className="mb-4">
        <label htmlFor="name" className="block font-medium mb-1">
          Full Name
        </label>
        <input
          name="name"
          type="text"
          id="name"
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={handleChange}
          value={formData.name}
          placeholder="Enter your full name"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block font-medium mb-1">
          Email
        </label>
        <input
          name="email"
          type="email"
          id="email"
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={handleChange}
          value={formData.email}
          placeholder="Enter your email"
          required
        />
      </div>

      <div className="mb-6">
        <label htmlFor="password" className="block font-medium mb-1">
          Password
        </label>
        <input
          name="password"
          type="password"
          id="password"
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={handleChange}
          value={formData.password}
          placeholder="Enter your password"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-200"
      >
        Register
      </button>
    </form>
  );
};

export default RegisterForm;
