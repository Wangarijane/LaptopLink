// src/components/landing/Navbar.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      className="bg-white dark:bg-gray-900 shadow-lg fixed w-full z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-blue-600 tracking-wide">
            Laptop<span className="text-purple-500">Link</span>
          </Link>

          {/* Menu (Desktop) */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="text-gray-700 dark:text-white hover:text-blue-600">Home</Link>
            <Link to="/about" className="text-gray-700 dark:text-white hover:text-blue-600">About</Link>
            <Link to="/contact" className="text-gray-700 dark:text-white hover:text-blue-600">Contact</Link>
            <Link to="/login" className="text-white bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 transition">
              Login
            </Link>
          </div>

          {/* Hamburger (Mobile) */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 dark:text-white focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            className="md:hidden flex flex-col mt-4 space-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <Link to="/" className="text-gray-800 dark:text-white">Home</Link>
            <Link to="/about" className="text-gray-800 dark:text-white">About</Link>
            <Link to="/contact" className="text-gray-800 dark:text-white">Contact</Link>
            <Link to="/login" className="bg-blue-600 text-white px-4 py-2 rounded">Login</Link>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;

