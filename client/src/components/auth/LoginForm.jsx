import React, { useState } from "react";

const LoginForm = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }

    try {
      await onLogin({ email, password });
    } catch (err) {
      setError("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md animate-fade-in"
      >
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">
          Welcome to LaptopLink
        </h2>

        {error && (
          <div className="bg-red-100 text-red-700 px-4 py-3 mb-4 rounded-md">
            {error}
          </div>
        )}

        {/* Email Field */}
        <div className="relative mb-6">
          <input
            type="email"
            id="email"
            className="peer w-full border border-gray-300 rounded-md px-3 pt-5 pb-2 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label
            htmlFor="email"
            className="absolute left-3 top-2 text-gray-500 text-sm peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all duration-200"
          >
            Email Address
          </label>
        </div>

        {/* Password Field */}
        <div className="relative mb-6">
          <input
            type="password"
            id="password"
            className="peer w-full border border-gray-300 rounded-md px-3 pt-5 pb-2 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label
            htmlFor="password"
            className="absolute left-3 top-2 text-gray-500 text-sm peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all duration-200"
          >
            Password
          </label>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition duration-200"
        >
          Sign In
        </button>

        <div className="flex justify-between mt-4 text-sm text-gray-600">
          <button type="button" className="hover:underline">
            Forgot Password?
          </button>
          <button type="button" className="hover:underline">
            Create Account
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
