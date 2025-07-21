// src/components/landing/FeaturesSection.jsx
import { FaLaptop, FaUserShield, FaUsers } from "react-icons/fa";
import { motion } from "framer-motion";

const features = [
  {
    icon: <FaLaptop className="text-4xl text-blue-600" />,
    title: "Tech for Every Student",
    description: "Provide students with laptops to bridge the digital divide and fuel learning.",
  },
  {
    icon: <FaUserShield className="text-4xl text-purple-600" />,
    title: "Secure & Transparent",
    description: "Verified users, trusted donations, and full transparency for every transaction.",
  },
  {
    icon: <FaUsers className="text-4xl text-green-600" />,
    title: "Community-Driven",
    description: "Connect schools, students, and donors in a shared mission to improve education.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="bg-white dark:bg-gray-900 py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white mb-10"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Why Choose LaptopLink?
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow hover:shadow-lg transition transform hover:-translate-y-1"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;


