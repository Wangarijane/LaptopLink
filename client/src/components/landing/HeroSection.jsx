// src/components/landing/HeroSection.jsx
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
        {/* Left: Text */}
        <motion.div
          className="w-full md:w-1/2 text-center md:text-left"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white leading-tight mb-4">
            Bridging the Digital Divide, One Laptop at a Time
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            LaptopLink connects donors with students who need laptops to succeed in school. Join us in making education more accessible.
          </p>
          <Link
            to="/register"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-medium shadow hover:bg-blue-700 transition"
          >
            Get Started
          </Link>
        </motion.div>

        {/* Right: Image / Illustration */}
        <motion.div
          className="w-full md:w-1/2 mt-10 md:mt-0 flex justify-center"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="https://images.pexels.com/photos/5553052/pexels-photo-5553052.jpeg"
            alt="Student using a laptop"
            className="max-w-full h-auto animate-fade-in rounded-lg"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
