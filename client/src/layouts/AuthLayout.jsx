// src/layouts/AuthLayout.jsx
import { Link } from "react-router-dom";

const AuthLayout = ({ children, type }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 px-4 py-10">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        {children}

        <p className="text-center text-sm mt-6 text-gray-600">
          {type === "login" ? (
            <>
              Don't have an account?{" "}
              <Link to="/register" className="text-blue-600 hover:underline">
                Register
              </Link>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <Link to="/login" className="text-blue-600 hover:underline">
                Login
              </Link>
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default AuthLayout;
