// src/components/landing/Footer.jsx
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
        <div>
          <h3 className="text-xl font-semibold mb-2">LaptopLink</h3>
          <p className="text-gray-400 text-sm">
            Connecting students with opportunity, one laptop at a time.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-1 text-gray-300 text-sm">
            <li><a href="/" className="hover:text-white transition">Home</a></li>
            <li><a href="/register" className="hover:text-white transition">Register</a></li>
            <li><a href="/login" className="hover:text-white transition">Login</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
          <div className="flex justify-center md:justify-start gap-4 text-xl">
            <a href="#" className="hover:text-blue-400"><FaFacebookF /></a>
            <a href="#" className="hover:text-blue-400"><FaTwitter /></a>
            <a href="#" className="hover:text-blue-400"><FaLinkedinIn /></a>
            <a href="#" className="hover:text-blue-400"><FaGithub /></a>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} LaptopLink. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

