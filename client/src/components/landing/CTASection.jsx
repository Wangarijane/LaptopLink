// src/components/landing/CTASection.jsx
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-pattern opacity-10"></div>

      <motion.div
        className="max-w-4xl mx-auto text-center relative z-10"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-4">
          Ready to Make an Impact?
        </h2>
        <p className="text-lg mb-8">
          Whether you’re a student, a school, or a donor, LaptopLink is your bridge to better education.
        </p>
        <div className="flex justify-center gap-6 flex-wrap">
          <Link
            to="/register"
            className="bg-white text-blue-700 px-6 py-3 rounded-lg text-lg font-medium hover:bg-gray-200 transition"
          >
            Get Started
          </Link>
          <Link
            to="/login"
            className="border border-white text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-white hover:text-blue-700 transition"
          >
            Already Have an Account?
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default CTASection;

